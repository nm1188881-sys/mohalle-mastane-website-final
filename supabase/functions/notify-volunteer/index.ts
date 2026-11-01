// Supabase Edge Function: emails the team whenever a volunteer signs up.
//
// Triggered by a Database Webhook on INSERT into public.volunteers
// (setup steps in README → "Email notifications").
//
// Secrets (Supabase → Edge Functions → notify-volunteer → Secrets):
//   RESEND_API_KEY   API key from https://resend.com (free tier: 100 emails/day)
//   NOTIFY_TO        comma-separated team inboxes, e.g. "a@gmail.com,b@gmail.com"
//   NOTIFY_FROM      sender, e.g. "Mohalle Mastane <noreply@yourdomain.org>"
//                    (until a domain is verified in Resend, use "onboarding@resend.dev";
//                     Resend then only delivers to the email you signed up with)
//   WEBHOOK_SECRET   any long random string; add the same value as an
//                    "x-webhook-secret" header when creating the webhook

type Volunteer = {
  full_name: string;
  phone: string;
  email: string | null;
  city: string;
  availability: string;
  roles: string[] | null;
  message: string | null;
  source_page: string | null;
  created_at: string;
};

const esc = (v: unknown) =>
  String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const secret = Deno.env.get("WEBHOOK_SECRET");
  if (!secret || req.headers.get("x-webhook-secret") !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = await req.json().catch(() => null);
  if (payload?.type !== "INSERT" || payload?.table !== "volunteers" || !payload.record) {
    return new Response("Ignored", { status: 200 });
  }
  const v = payload.record as Volunteer;

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const to = (Deno.env.get("NOTIFY_TO") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const from = Deno.env.get("NOTIFY_FROM") ?? "Mohalle Mastane <onboarding@resend.dev>";
  if (!apiKey || to.length === 0) {
    console.error("RESEND_API_KEY or NOTIFY_TO not set");
    return new Response("Not configured", { status: 500 });
  }

  const digits = v.phone.replace(/\D/g, "");
  const waNumber = digits.length === 10 ? `91${digits}` : digits.replace(/^0/, "91");
  const when = new Date(v.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const rows: [string, string][] = [
    ["Name", esc(v.full_name)],
    ["Mobile", `<a href="tel:${esc(v.phone)}">${esc(v.phone)}</a> · <a href="https://wa.me/${waNumber}">WhatsApp</a>`],
    ["Email", v.email ? `<a href="mailto:${esc(v.email)}">${esc(v.email)}</a>` : "—"],
    ["Area / city", esc(v.city)],
    ["Availability", esc(v.availability)],
    ["Wants to help as", v.roles?.length ? esc(v.roles.join(", ")) : "—"],
    ["Message", v.message ? esc(v.message).replaceAll("\n", "<br>") : "—"],
    ["Signed up on", `${esc(when)} (page: ${esc(v.source_page ?? "—")})`],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#222;max-width:560px">
      <h2 style="font-weight:500">New volunteer: ${esc(v.full_name)}</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, val]) =>
              `<tr><td style="color:#777;border-bottom:1px solid #eee;width:150px;vertical-align:top">${k}</td><td style="border-bottom:1px solid #eee">${val}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="color:#777;font-size:13px">All volunteers: Supabase → Table Editor → volunteers.</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: v.email ?? undefined,
      subject: `New volunteer: ${v.full_name} (${v.city})`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return new Response("Email failed", { status: 502 });
  }
  return new Response("Sent", { status: 200 });
});
