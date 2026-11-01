# Mohalle Mastane — launch setup

This guide connects the website to Supabase (volunteer database), email
notifications and Razorpay. Allow about 45 minutes. No coding is needed
except copy-pasting.

---

## 1. Fill in contact details (5 min)

Open `src/config/site.ts` and confirm every value marked **CONFIRM**:

| Field | What to put |
| --- | --- |
| `email` | The Trust's public email. Leave `""` to hide email links. |
| `phoneDisplay` / `phoneHref` | Public phone number |
| `location` | City shown in the footers (currently a guess: Rourkela, Odisha) |
| `whatsappGroupUrl` | WhatsApp community invite link |
| `razorpayUrl` | Already set to `https://razorpay.me/@mohallemastanetrust` |

---

## 2. Create the database (10 min)

1. Sign up at <https://supabase.com> with the Trust's Google account and
   create a project (region: **Mumbai**). Save the database password somewhere safe.
2. Open **SQL Editor → New query**, paste all of
   `supabase/migrations/001_initial_schema.sql`, click **Run**. Repeat in a
   new query for `supabase/migrations/002_volunteer_validation.sql`.
   Both should complete successfully. The second migration restricts public
   inserts to the form fields, validates allowed availability/roles on the
   database, normalizes mobile numbers, and applies a concurrency-safe
   three-submissions-per-number-per-day limit.
3. Open **Project Settings → API** and copy:
   - **Project URL**
   - **anon public** key (NOT the `service_role` key)

**Tables created**

| Table | Used for | Who can access |
| --- | --- | --- |
| `volunteers` | Website sign-up form | Website can only *add* rows. Team views them in the dashboard. |
| `donations` | Ready for phase 2 (Razorpay webhook / imports) | Team only |
| `events` | Ready for managing events from a dashboard later | Public can read published events |
| `team_members` | Who may sign in to a future admin dashboard | Team only |

**Viewing volunteers:** Supabase → **Table Editor → volunteers**. Use the
`status` column (`new → contacted → onboarded`) and `notes` to track
follow-ups. **Export → CSV** downloads the list for Excel / Google Sheets.
Invite teammates under **Organization → Team** so they can view it too.

---

## 3. Public registration and optional Supabase setup

**Google Forms is the active public volunteer registration method** on the
homepage and Vision page. The Supabase form was tested locally but is hidden
from production visitors. Production Supabase environment variables are not
required while Google Forms remains the public registration option.

The existing Supabase integration is preserved for possible future activation.
Only if the team decides to activate that registration flow, add these values
in **Vercel → your project → Settings → Environment Variables**:

```
VITE_SUPABASE_URL       = <Project URL from step 2>
VITE_SUPABASE_ANON_KEY  = <anon public key from step 2>
```

Vite reads these values at build time. Redeploy after the Supabase registration
flow is intentionally activated.

For local development, copy `.env.example` to `.env.local` and fill it in.

For local development only, the Supabase form can be tested after setting up
`.env.local`. Submit dummy details using a test contact controlled by the Trust,
then check the `volunteers` table. Do not enter real volunteer information;
delete the test row after confirming it was saved.

---

## 4. Optional email notifications (only for Supabase registrations)

Email notifications are not required for the currently active Google Forms
registration. Configure Resend and the Supabase webhook only if the Supabase
registration flow is activated and email notifications are desired.

1. Create a free account at <https://resend.com> → **API Keys → Create**.
   Optional but recommended: **Domains → Add** your domain so emails come
   from it. Without a verified domain, Resend only delivers to the address
   you signed up with.
2. Install the Supabase CLI (<https://supabase.com/docs/guides/cli>) and run
   these commands in the VS Code PowerShell terminal from this project folder:
   ```powershell
   supabase login
   supabase link --project-ref YOUR-PROJECT-REF
   supabase functions deploy notify-volunteer --no-verify-jwt
   ```
3. In **Supabase → Edge Functions → Secrets**, add:
   - `RESEND_API_KEY`: the API key from Resend
   - `NOTIFY_TO`: the authorized NGO staff inbox(es), comma-separated
   - `NOTIFY_FROM`: a Resend-verified sender, or
     `Mohalle Mastane <onboarding@resend.dev>` while testing with the Resend
     account's own email address
   - `WEBHOOK_SECRET`: a long random value generated with a password manager.
     Save it securely; the dashboard will not reveal it again.
4. Supabase → **Database → Webhooks → Create a new hook**
   - Table: `volunteers`, Events: **Insert**
   - Type: **Supabase Edge Functions** → `notify-volunteer`, Method: POST
   - HTTP Headers → add `x-webhook-secret` = the same `WEBHOOK_SECRET`
5. Submit the form again. An email with the volunteer's details and a
   one-tap WhatsApp link should arrive within a minute. If not, check
   **Edge Functions → notify-volunteer → Logs**. Notifications are not active
   until the Resend account, function secrets, and database webhook are set up;
   this workspace has no project credentials to test delivery.

---

## 5. Donations (Razorpay)

All donate buttons open the Trust's official page
(`https://razorpay.me/@mohallemastanetrust`) in a new tab. Donors enter
the amount there and pay by UPI, card, net banking or wallet. Razorpay
emails them the payment confirmation, and payments show in the Razorpay
dashboard.

The website no longer shows a "thank you" before payment. Because a
razorpay.me page doesn't report back to the website, the site can't
confirm payment itself — Razorpay's confirmation is the source of truth.

**Phase 2 (optional):** for on-site checkout, automatic donation records
and 80G receipts, switch to Razorpay Standard Checkout with a server-side
order + signature verification + `payment.captured` webhook that writes to
the `donations` table.

---

## Before going live — checklist

- [ ] Contact details in `src/config/site.ts` confirmed
- [ ] Public Google Form opens and accepts a test registration
- [ ] If Supabase registration is activated: test volunteer sign-up saved in Supabase
- [ ] If email notifications are activated: notification email received
- [ ] Events, volunteer schedules, WhatsApp link, and event venues confirmed
- [ ] Donation page/link and Trust's payment/receipt process confirmed on Razorpay
- [ ] Claims on the fundraising page confirmed: "registered charitable
      trust", "funds are audited", allocation percentages, statistics
- [ ] Story locations (Sector 9, Old Town Colony, Riverside Colony, …) are real
- [ ] All images load on the deployed site (see note below)

### Note on images

Images in this repo are referenced via `src/assets/*.asset.json` files
whose URLs start with `/__l5e/assets-v1/…`. These are served by Lovable's
hosting, but the original image files are not included here. Local browser
testing confirms these image URLs currently return 404s, including the logo
and page photography. Before deployment, obtain the original assets from the
connected Lovable project or from the Trust, place them in `src/assets/`, and
replace the `.asset.json` imports with imports of the actual files. Also
update the `concrete-dark` background URL in `src/styles.css`. Do not replace
the missing photos with unrelated images.
