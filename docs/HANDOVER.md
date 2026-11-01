# Organization update — 2 November 2026

The supplied handover source has been integrated with the existing repository. Documentation now lives in `docs/`; root guide files link here. Application routes, shared components, configuration, database migrations and optional functions retain their existing paths.

Validation for this update: `npm run typecheck`, `npm run build`, and `git diff --check` passed. Browser interactions, database writes, notification delivery and production deployment were not re-tested in this update. Earlier database test statements below are inherited from the supplied handover and are not new verification.

Missing image files remain a launch blocker. No production secrets are included.

---

# Mohalle Mastane Website Handover

## Completed

- Google Forms is the active public volunteer registration method on the homepage and Vision page. The homepage and Events Volunteer links target the always-visible homepage Google Form section; Vision's Volunteer With Us link targets its visible Google Form section.
- The existing Supabase volunteer form and database integration are preserved. It was tested locally, and the homepage test form is gated by `import.meta.env.DEV`, so it is hidden in production builds.
- Volunteer registration was tested successfully in Supabase; the anonymous read check was denied.
- Supabase migrations, the `notify-volunteer` Edge Function, `.env.example`, and setup guidance are included in this source package.
- Final checks passed: `npx tsc --noEmit` and `npm run build`.

## Pending before launch

- **Images:** several referenced Lovable-hosted image files are not included in this project. Obtain the original assets and replace the references before launch; the production build reports unresolved asset warnings.
- **Supabase activation:** production `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are only required if the team activates the Supabase registration flow. The local `.env.local` is intentionally excluded from this package.
- **Email notifications:** Resend and its `RESEND_API_KEY`, `NOTIFY_TO`, `NOTIFY_FROM`, and `WEBHOOK_SECRET` settings are only needed if Supabase registration is activated and staff email notifications are wanted. Deploy `notify-volunteer` and create the `volunteers` INSERT database webhook then; delivery has not been verified.
- **Deployment:** no production deployment has been performed. Complete the pending setup and verify the deployed site before launch.

Do not put service-role keys, Resend keys, or webhook secrets in frontend environment variables or source control.
