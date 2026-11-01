-- Volunteer submission hardening. Run after 001_initial_schema.sql.
-- Safe to re-run.

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'volunteers_availability_allowed'
      and conrelid = 'public.volunteers'::regclass
  ) then
    alter table public.volunteers
      add constraint volunteers_availability_allowed
      check (
        availability in (
          'Weekday mornings',
          'Weekday evenings',
          'Weekends',
          'On-call for emergencies',
          'Remote / online support'
        )
      ) not valid;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'volunteers_roles_allowed'
      and conrelid = 'public.volunteers'::regclass
  ) then
    alter table public.volunteers
      add constraint volunteers_roles_allowed
      check (
        roles <@ array[
          'Feeder',
          'Rescuer',
          'Foster parent',
          'Transport',
          'Awareness',
          'Coordination'
        ]::text[]
      ) not valid;
  end if;
end
$$;

-- A public visitor may insert only the fields exposed by the volunteer form.
revoke insert on public.volunteers from public, anon, authenticated;
grant insert (
  full_name,
  phone,
  email,
  city,
  availability,
  roles,
  message,
  source_page
) on public.volunteers to anon, authenticated;
revoke select, update, delete on public.volunteers from public, anon;

create or replace function public.limit_volunteer_signups()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  new.full_name := btrim(new.full_name);
  new.phone := regexp_replace(coalesce(new.phone, ''), '[^0-9]', '', 'g');

  if length(new.phone) = 12 and left(new.phone, 2) = '91' then
    new.phone := substring(new.phone from 3);
  elsif length(new.phone) = 11 and left(new.phone, 1) = '0' then
    new.phone := substring(new.phone from 2);
  end if;

  if new.phone !~ '^[6-9][0-9]{9}$' then
    raise exception 'Enter a valid 10-digit Indian mobile number';
  end if;

  new.email := nullif(btrim(coalesce(new.email, '')), '');
  new.city := btrim(new.city);
  new.availability := btrim(new.availability);
  new.roles := coalesce(new.roles, '{}'::text[]);
  new.message := nullif(btrim(coalesce(new.message, '')), '');
  new.source_page := nullif(btrim(coalesce(new.source_page, '')), '');
  new.created_at := now();
  new.updated_at := now();
  new.status := 'new';
  new.notes := null;
  new.assigned_to := null;

  perform pg_advisory_xact_lock(hashtext(new.phone)::bigint);

  if (
    select count(*)
    from public.volunteers
    where phone = new.phone
      and created_at > now() - interval '1 day'
  ) >= 3 then
    raise exception 'Too many sign-ups for this number today';
  end if;

  return new;
end
$$;
