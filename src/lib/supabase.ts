/**
 * Minimal Supabase client for public form submissions.
 *
 * Uses the PostgREST API directly with a browser-safe Supabase publishable
 * key (or the legacy anon public key), so no extra
 * npm dependency is needed. This is safe because Row Level Security in
 * supabase/migrations/001_initial_schema.sql only lets the anon role INSERT
 * into the volunteers table. It cannot read, update or delete anything.
 *
 * Required env vars (Vercel → Project → Settings → Environment Variables):
 *   VITE_SUPABASE_URL       e.g. https://abcdefgh.supabase.co
 *   VITE_SUPABASE_ANON_KEY  the publishable key (or legacy anon public key)
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export class SubmissionError extends Error {}

export async function insertRow(table: string, row: Record<string, unknown>): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new SubmissionError("The form isn't connected yet. Please try again later.");
  }

  let res: Response;
  try {
    res = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
  } catch {
    throw new SubmissionError("Couldn't reach the server. Check your connection and try again.");
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`Supabase insert into ${table} failed`, res.status, detail);
    throw new SubmissionError("Your details weren't saved. Please try again in a moment.");
  }
}
