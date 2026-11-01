import { useState } from "react";
import { z } from "zod";
import { insertRow, SubmissionError } from "@/lib/supabase";
import { site } from "@/config/site";

/* Indian mobile numbers: optional +91 / 0 prefix, then 10 digits starting 6–9. */
const phoneRegex = /^(?:\+?91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}$/;

const schema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your full name" }).max(100),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Enter a valid 10-digit mobile number" }),
  email: z
    .string()
    .trim()
    .max(200)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, {
      message: "Enter a valid email address, or leave it blank",
    }),
  city: z.string().trim().min(2, { message: "Please enter your area or city" }).max(100),
  availability: z.string().trim().min(1, { message: "Please choose your availability" }),
  roles: z.array(z.string()).max(10),
  message: z.string().trim().max(500, { message: "Keep it under 500 characters" }),
});

type Values = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

const availabilities = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekends",
  "On-call for emergencies",
  "Remote / online support",
];

const roles = [
  "Feeder",
  "Rescuer",
  "Foster parent",
  "Transport",
  "Awareness",
  "Coordination",
];

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  city: "",
  availability: "",
  roles: [],
  message: "",
};

const fieldClass =
  "w-full bg-transparent border-b border-border/80 py-3 text-[16px] outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/60 disabled:opacity-60";

const labelClass = "block text-[10px] uppercase tracking-[0.28em] text-muted-foreground";

export function RescueCircleRegistration() {
  return (
    <div className="mt-8 border-t border-border pt-6">
      <p className="text-[12px] leading-[1.7] text-muted-foreground">
        Joining the Mohalle Mastane Rescue Circle? Register using its dedicated Google Form.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScb9aMk8RyUVukTG2z65yAGP7dczPRPhn5MuYIT6mg6cj_NOg/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-12 items-center justify-center border border-foreground px-8 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Rescue Circle Registration (Google Form)
      </a>
    </div>
  );
}

export function VolunteerForm({
  id = "volunteer",
  showRescueCircleRegistration = true,
}: {
  id?: string;
  showRescueCircleRegistration?: boolean;
}) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  // Honeypot: real people never see or fill this field; bots usually do.
  const [trap, setTrap] = useState("");

  const set = <K extends keyof Values>(key: K, v: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleRole = (role: string) =>
    set(
      "roles",
      values.roles.includes(role) ? values.roles.filter((r) => r !== role) : [...values.roles, role],
    );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Values, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      // Move focus to the first invalid field so keyboard and screen-reader users land on it.
      const first = Object.keys(next)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }

    setErrors({});
    setServerError("");

    if (trap) {
      // Silently "succeed" for bots without storing anything.
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const v = parsed.data;
      await insertRow("volunteers", {
        full_name: v.name,
        phone: v.phone.replace(/[\s-]/g, ""),
        email: v.email || null,
        city: v.city,
        availability: v.availability,
        roles: v.roles,
        message: v.message || null,
        source_page: typeof window !== "undefined" ? window.location.pathname : null,
      });
      setStatus("success");
      setValues(empty);
    } catch (err) {
      setServerError(
        err instanceof SubmissionError ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div id={id} role="status" aria-live="polite" className="max-w-2xl border-t border-accent pt-10">
        <h3 className="serif text-[28px] leading-[1.15] md:text-[36px]">
          Thank you for signing up.
        </h3>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-muted-foreground">
          Your registration has been saved. The team can review your details and follow up using the
          number you shared. Meanwhile, join the WhatsApp circle to see what's happening near you.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={site.whatsappGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent"
          >
            Join the WhatsApp circle
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center border border-border px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Register someone else
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";
  const err = (key: keyof Values) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-2 text-[12px] text-destructive">
        {errors[key]}
      </p>
    ) : null;
  const aria = (key: keyof Values) => ({
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
  });

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="max-w-2xl">
      <fieldset disabled={submitting} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${id}-name`}>
            Full name
          </label>
          <input
            id={`${id}-name`}
            value={values.name}
            maxLength={100}
            autoComplete="name"
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
            className={fieldClass}
            {...aria("name")}
          />
          {err("name")}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-phone`}>
            Mobile (WhatsApp)
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="tel"
            value={values.phone}
            maxLength={16}
            autoComplete="tel"
            onChange={(e) => set("phone", e.target.value)}
            placeholder="98765 43210"
            className={fieldClass}
            {...aria("phone")}
          />
          {err("phone")}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-email`}>
            Email (optional)
          </label>
          <input
            id={`${id}-email`}
            type="email"
            inputMode="email"
            value={values.email}
            maxLength={200}
            autoComplete="email"
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
            {...aria("email")}
          />
          {err("email")}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-city`}>
            Area / city
          </label>
          <input
            id={`${id}-city`}
            value={values.city}
            maxLength={100}
            autoComplete="address-level2"
            onChange={(e) => set("city", e.target.value)}
            placeholder="Your neighbourhood and city"
            className={fieldClass}
            {...aria("city")}
          />
          {err("city")}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${id}-availability`}>
            Availability
          </label>
          <select
            id={`${id}-availability`}
            value={values.availability}
            onChange={(e) => set("availability", e.target.value)}
            className={`${fieldClass} appearance-none`}
            {...aria("availability")}
          >
            <option value="">Select when you can help</option>
            {availabilities.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {err("availability")}
        </div>

        <div className="sm:col-span-2">
          <span className={labelClass} id={`${id}-roles-label`}>
            How would you like to help? (optional)
          </span>
          <div role="group" aria-labelledby={`${id}-roles-label`} className="mt-4 flex flex-wrap gap-2">
            {roles.map((r) => {
              const on = values.roles.includes(r);
              return (
                <button
                  key={r}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleRole(r)}
                  className={`min-h-11 border px-4 py-2 text-[13px] transition-colors ${
                    on
                      ? "border-accent bg-accent text-ink"
                      : "border-border text-foreground/80 hover:border-accent hover:text-accent"
                  }`}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${id}-message`}>
            A short message (optional)
          </label>
          <textarea
            id={`${id}-message`}
            value={values.message}
            maxLength={500}
            rows={3}
            onChange={(e) => set("message", e.target.value)}
            placeholder="What draws you to this work?"
            className={`${fieldClass} resize-none`}
            {...aria("message")}
          />
          {err("message")}
        </div>

        {/* Honeypot — hidden from people and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
          </label>
        </div>
      </fieldset>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 items-center justify-center bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Sign up to volunteer"}
        </button>
        <p className="text-[12px] leading-[1.7] text-muted-foreground">
          We only use your details to coordinate volunteering.
        </p>
      </div>

      {showRescueCircleRegistration && <RescueCircleRegistration />}

      {status === "error" && (
        <div role="alert" className="mt-6 border-l-2 border-destructive pl-4 text-[14px] leading-[1.8]">
          <p className="text-destructive">{serverError}</p>
          <p className="mt-1 text-muted-foreground">
            Your answers are still filled in. If it keeps failing,{" "}
            <a href={site.whatsappGroupUrl} target="_blank" rel="noreferrer" className="underline hover:text-accent">
              reach us on WhatsApp
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
