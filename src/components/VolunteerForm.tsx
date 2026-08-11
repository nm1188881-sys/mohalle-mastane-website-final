import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  city: z.string().trim().min(1, { message: "Please enter your city" }).max(100),
  availability: z.string().trim().min(1, { message: "Please choose your availability" }),
  message: z.string().trim().max(500, { message: "Keep it under 500 characters" }),
});

const availabilities = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekends",
  "On-call for emergencies",
  "Remote / online support",
];

const fieldClass =
  "w-full bg-transparent border-b border-border/80 py-3 text-[15px] outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/60";

const labelClass =
  "block text-[10px] uppercase tracking-[0.28em] text-muted-foreground";

export function VolunteerForm({ id = "volunteer" }: { id?: string }) {
  const [values, setValues] = useState({ name: "", city: "", availability: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const body = [
      `Name: ${d.name}`,
      `City: ${d.city}`,
      `Availability: ${d.availability}`,
      "",
      d.message || "(no message)",
    ].join("\n");
    window.location.href = `mailto:hello@streetkind.org?subject=${encodeURIComponent(
      "Volunteer sign-up",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <label className={labelClass} htmlFor={`${id}-name`}>
            Name
          </label>
          <input
            id={`${id}-name`}
            value={values.name}
            maxLength={100}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Your full name"
            className={fieldClass}
          />
          {errors["name"] && <p className="mt-2 text-[12px] text-destructive">{errors["name"]}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-city`}>
            City
          </label>
          <input
            id={`${id}-city`}
            value={values.city}
            maxLength={100}
            onChange={(e) => set("city")(e.target.value)}
            placeholder="Where you live"
            className={fieldClass}
          />
          {errors["city"] && <p className="mt-2 text-[12px] text-destructive">{errors["city"]}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${id}-availability`}>
            Availability
          </label>
          <select
            id={`${id}-availability`}
            value={values.availability}
            onChange={(e) => set("availability")(e.target.value)}
            className={`${fieldClass} appearance-none`}
          >
            <option value="">Select when you can help</option>
            {availabilities.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors["availability"] && (
            <p className="mt-2 text-[12px] text-destructive">{errors["availability"]}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${id}-message`}>
            A short message
          </label>
          <textarea
            id={`${id}-message`}
            value={values.message}
            maxLength={500}
            rows={3}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="What draws you to this work?"
            className={`${fieldClass} resize-none`}
          />
          {errors["message"] && (
            <p className="mt-2 text-[12px] text-destructive">{errors["message"]}</p>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
        >
          Sign Up to Volunteer
        </button>
        {sent && (
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">
            Thank you — your email draft is ready to send.
          </p>
        )}
      </div>
    </form>
  );
}
