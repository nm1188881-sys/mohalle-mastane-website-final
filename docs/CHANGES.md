# Changes in this update

## Fixed
- **Volunteer form** now saves directly to Supabase instead of opening a blank
  Google Form. Added mobile number (required) and email (optional) so the team
  can actually contact volunteers, plus optional "how I'd like to help" roles.
- **Form feedback:** clear inline errors per field, "Sending…" state, a real
  success message only after the database confirms, and an error message that
  keeps the answers filled in. Spam honeypot + 3-per-day limit per number.
- **Donations:** removed the fake UPI ID (`streetkind@upi`) and QR code, which
  would not have reached the Trust. All donate buttons now go to
  `razorpay.me/@mohallemastanetrust`.
- **Premature thank-you removed.** Choosing a donation tier now only selects the
  amount and scrolls to the donate panel.
- **Placeholder contacts removed:** `hello@streetkind.org`,
  `streetkind@gmail.com`, "Our city — India". All contact details now come from
  `src/config/site.ts`.
- **Links:** Events "Volunteer" buttons go to the sign-up form (not WhatsApp);
  "Sponsor a Bori Bed" goes to Razorpay; Vision "Volunteer With Us" scrolls to
  the form on the same page; surgery-fund buttons go to Razorpay / WhatsApp.
- Footer years no longer hard-coded to 2025.

## Responsive / accessibility
- Inputs use 16px text so iPhones don't zoom in when tapping a field.
- Fixed backgrounds disabled on phones/tablets (they break on iOS Safari).
- Anchor links land below the fixed header instead of under it.
- No sideways scrolling on narrow screens; visible keyboard focus outline;
  smooth scrolling respects "reduce motion".
- Tap targets on form/donation buttons are at least 44px.

## Added
- `src/config/site.ts` — contact details & links in one place
- `src/lib/supabase.ts` — form submission helper (no new npm dependency)
- `supabase/migrations/001_initial_schema.sql` — volunteers, donations, events,
  team_members tables with row-level security
- `supabase/functions/notify-volunteer` — email to the team on each sign-up
- `SETUP.md`, `.env.example`
