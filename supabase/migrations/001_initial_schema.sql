-- ════════════════════════════════════════════════════════════════════
-- Mohalle Mastane Trust — initial database schema
-- Run once in Supabase → SQL Editor → New query → paste → Run.
-- Safe to re-run: every statement checks whether it already exists.
-- ════════════════════════════════════════════════════════════════════

create extension if not exists "pgcrypto";

-- ── Shared: keep updated_at current on every edit ───────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ════════════════════════════════════════════════════════════════════
-- 0. TEAM MEMBERS — people allowed to view data once they sign in
-- ════════════════════════════════════════════════════════════════════
create table if not exists public.team_members (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  full_name  text,
  role       text not null default 'coordinator' check (role in ('admin', 'coordinator')),
  created_at timestamptz not null default now()
);
alter table public.team_members enable row level security;
drop policy if exists "Team can see team" on public.team_members;
create policy "Team can see team" on public.team_members for select to authenticated
  using (user_id = auth.uid());

-- ── Volunteer status (lets the team track follow-ups) ───────────────
do $$ begin
  create type public.volunteer_status as enum
    ('new', 'contacted', 'onboarded', 'inactive', 'not_a_fit');
exception when duplicate_object then null; end $$;

-- ════════════════════════════════════════════════════════════════════
-- 1. VOLUNTEERS — filled by the website's sign-up form
-- ════════════════════════════════════════════════════════════════════
create table if not exists public.volunteers (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  full_name     text not null check (char_length(full_name) between 2 and 100),
  phone         text not null check (phone ~ '^\+?[0-9]{10,13}$'),
  email         text check (email is null or email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  city          text not null check (char_length(city) between 2 and 100),
  availability  text not null check (char_length(availability) <= 60),
  roles         text[] not null default '{}' check (cardinality(roles) <= 10),
  message       text check (message is null or char_length(message) <= 500),
  source_page   text check (source_page is null or char_length(source_page) <= 100),

  -- Internal fields: only the team edits these (from the Supabase dashboard).
  status        public.volunteer_status not null default 'new',
  notes         text,
  assigned_to   text
);

create index if not exists volunteers_created_at_idx on public.volunteers (created_at desc);
create index if not exists volunteers_status_idx     on public.volunteers (status);
create index if not exists volunteers_phone_idx      on public.volunteers (phone);

drop trigger if exists volunteers_updated_at on public.volunteers;
create trigger volunteers_updated_at before update on public.volunteers
  for each row execute function public.set_updated_at();

-- Security: the public website may only ADD a volunteer, never read others.
alter table public.volunteers enable row level security;

drop policy if exists "Public can sign up as volunteer" on public.volunteers;
create policy "Public can sign up as volunteer"
  on public.volunteers for insert
  to anon, authenticated
  with check (
    status = 'new' and notes is null and assigned_to is null
  );

-- Members of the team who sign in (see README → "Giving teammates access")
-- can read and update volunteers. The anon key cannot.
drop policy if exists "Team can read volunteers" on public.volunteers;
create policy "Team can read volunteers"
  on public.volunteers for select to authenticated
  using (exists (select 1 from public.team_members t where t.user_id = auth.uid()));

drop policy if exists "Team can update volunteers" on public.volunteers;
create policy "Team can update volunteers"
  on public.volunteers for update to authenticated
  using (exists (select 1 from public.team_members t where t.user_id = auth.uid()));

-- Basic spam brake: max 3 sign-ups per phone number per day.
create or replace function public.limit_volunteer_signups()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.volunteers
        where phone = new.phone and created_at > now() - interval '1 day') >= 3 then
    raise exception 'Too many sign-ups for this number today';
  end if;
  return new;
end $$;

drop trigger if exists volunteers_rate_limit on public.volunteers;
create trigger volunteers_rate_limit before insert on public.volunteers
  for each row execute function public.limit_volunteer_signups();

-- ════════════════════════════════════════════════════════════════════
-- 3. DONATIONS — ready for phase 2 (Razorpay webhook / manual entry)
-- Not written to by the website yet: donations currently go through the
-- razorpay.me page. Payments can be exported from the Razorpay dashboard
-- and imported here, or recorded automatically once a webhook is added.
-- ════════════════════════════════════════════════════════════════════
do $$ begin
  create type public.donation_status as enum ('created', 'paid', 'failed', 'refunded');
exception when duplicate_object then null; end $$;

create table if not exists public.donations (
  id                   uuid primary key default gen_random_uuid(),
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),
  donor_name           text,
  donor_email          text,
  donor_phone          text,
  donor_pan            text,                     -- only if an 80G receipt is requested
  amount_paise         integer not null check (amount_paise > 0),
  currency             text not null default 'INR',
  status               public.donation_status not null default 'created',
  campaign             text,                     -- e.g. 'general', 'surgery-fund', 'bori-bed'
  razorpay_payment_id  text unique,
  razorpay_order_id    text,
  receipt_number       text unique,
  receipt_sent_at      timestamptz,
  notes                text
);
create index if not exists donations_created_at_idx on public.donations (created_at desc);
drop trigger if exists donations_updated_at on public.donations;
create trigger donations_updated_at before update on public.donations
  for each row execute function public.set_updated_at();

-- No public access at all; only the team and server-side code (service role).
alter table public.donations enable row level security;
drop policy if exists "Team can read donations" on public.donations;
create policy "Team can read donations" on public.donations for select to authenticated
  using (exists (select 1 from public.team_members t where t.user_id = auth.uid()));

-- ════════════════════════════════════════════════════════════════════
-- 4. EVENTS — ready for when events are managed from a dashboard
-- ════════════════════════════════════════════════════════════════════
create table if not exists public.events (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  title        text not null,
  slug         text unique not null,
  summary      text,
  body         text,
  starts_at    timestamptz,
  ends_at      timestamptz,
  location     text,
  image_url    text,
  is_published boolean not null default false
);
drop trigger if exists events_updated_at on public.events;
create trigger events_updated_at before update on public.events
  for each row execute function public.set_updated_at();

alter table public.events enable row level security;
drop policy if exists "Anyone can read published events" on public.events;
create policy "Anyone can read published events" on public.events for select
  to anon, authenticated using (is_published);

-- ── Handy view for the team: newest volunteers first ────────────────
create or replace view public.volunteers_recent
with (security_invoker = true) as
  select created_at, full_name, phone, email, city, availability, roles, status, message
  from public.volunteers
  order by created_at desc;
