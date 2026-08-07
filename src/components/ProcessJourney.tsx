import { useEffect, useRef, useState, type ReactElement } from "react";

type StepArt = (props: { className?: string }) => ReactElement;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* 01 — a phone held up over a street: the message that starts everything */
const ArtSpot: StepArt = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <g {...stroke}>
      <path d="M8 96h104" strokeDasharray="1 6" />
      <rect x="38" y="20" width="44" height="74" rx="5" />
      <path d="M52 28h16" />
      <circle cx="60" cy="86" r="2.4" />
      <path d="M46 44h28M46 52h20M46 60h24" strokeDasharray="1 5" />
      <path d="M60 8v6M44 12l2.5 5.5M76 12l-2.5 5.5" />
      <path d="M84 70c6 0 9-4 9-8s-3-7-7-7c-1-5-5-8-10-8" opacity="0.55" />
    </g>
    <circle cx="60" cy="70" r="7" fill="currentColor" opacity="0.12" />
  </svg>
);

/* 02 — two hands meeting: coordinating with the rescuer nearest to you */
const ArtConnect: StepArt = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <g {...stroke}>
      <circle cx="34" cy="38" r="11" />
      <path d="M16 84c0-11 8-19 18-19s18 8 18 19" />
      <circle cx="86" cy="38" r="11" />
      <path d="M68 84c0-11 8-19 18-19s18 8 18 19" />
      <path d="M46 62c5 4 9 6 14 6s9-2 14-6" strokeDasharray="1 5" />
      <path d="M60 96c-7-6-13-10-13-16a6.5 6.5 0 0 1 13-3 6.5 6.5 0 0 1 13 3c0 6-6 10-13 16z" />
    </g>
  </svg>
);

/* 03 — a circle of people closing in when the first call goes unanswered */
const ArtTeam: StepArt = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <g {...stroke}>
      <circle cx="60" cy="60" r="34" strokeDasharray="2 7" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = (deg * Math.PI) / 180;
        const x = 60 + 34 * Math.cos(r);
        const y = 60 + 34 * Math.sin(r);
        return (
          <g key={deg}>
            <circle cx={x} cy={y} r="5.5" />
            <path d={`M${x} ${y + 7}v6`} />
          </g>
        );
      })}
      <path d="M52 62c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12s-8-6-8-12z" />
    </g>
  </svg>
);

/* 04 — care at the veterinary hospital */
const ArtCare: StepArt = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <g {...stroke}>
      <path d="M22 96V44l38-24 38 24v52" />
      <path d="M12 96h96" />
      <path d="M60 40v18M51 49h18" />
      <rect x="42" y="66" width="36" height="30" />
      <path d="M60 66v30M42 80h36" strokeDasharray="1 5" />
      <path d="M30 34c4-4 8-6 12-6" opacity="0.5" />
    </g>
  </svg>
);

/* 05 — the loop closes: the case comes back to the community as an update */
const ArtLoop: StepArt = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <g {...stroke}>
      <path d="M92 60a32 32 0 1 1-9.4-22.6" />
      <path d="M84 20v18h-18" />
      <path d="M46 58l10 10 20-22" />
      <circle cx="60" cy="60" r="44" strokeDasharray="1 7" opacity="0.5" />
    </g>
  </svg>
);

type Step = {
  n: string;
  title: string;
  body: string;
  caption: string;
  tag?: string;
  Art: StepArt;
};

const steps: Step[] = [
  {
    n: "01",
    title: "You Spot It → You Post It",
    body: "When you see an animal in distress — injured, sick, starving — post it in the group with a photo and location. That single message is enough to set things in motion.",
    caption: "One message. One location.",
    Art: ArtSpot,
  },
  {
    n: "02",
    title: "Connect With an Experienced Rescuer Near You",
    body: "We have neighbours in this very community who have been rescuing for years. Your first move is always to coordinate with them — reach out, stay close, let them guide you through.",
    caption: "Nearest hands first.",
    tag: "Primary Step",
    Art: ArtConnect,
  },
  {
    n: "03",
    title: "If Unavailable — We Move Together",
    body: "If an experienced rescuer isn't reachable, our consistent team steps in. But that is the backup — not the default. The goal is always the person closest to the animal and the street.",
    caption: "The circle closes in.",
    Art: ArtTeam,
  },
  {
    n: "04",
    title: "Treatment via Government Veterinary Hospital",
    body: "All medical cases are coordinated through the Government Veterinary Hospital, and our team follows up at every stage to ensure the animal receives proper care.",
    caption: "Care, followed through.",
    Art: ArtCare,
  },
  {
    n: "05",
    title: "Every Case Is Logged. Updates Come Back to You.",
    body: "Nothing is forgotten. The community hears what happened. This group is a circle — and it closes only when the animal is safe.",
    caption: "The loop returns home.",
    Art: ArtLoop,
  },
];

export function ProcessJourney() {
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(steps.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ol className="relative">
      {/* the spine */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_12px)] text-border"
      />
      {steps.map((s, i) => {
        const flip = i % 2 === 1;
        const isVisible = visible[i];
        return (
          <li
            key={s.n}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-index={i}
            className={`relative md:grid md:grid-cols-2 md:gap-20 py-10 md:py-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
          >
            {/* illustration */}
            <div
              className={`flex justify-center ${
                flip ? "md:order-2 md:justify-start" : "md:justify-end"
              }`}
            >
              <figure
                className={`relative w-[190px] md:w-[240px] aspect-square border border-border bg-card flex items-center justify-center transition-transform duration-700 ease-out ${
                  isVisible ? "scale-100" : "scale-[0.94]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-3 border border-border/60"
                  style={{ borderStyle: "dashed" }}
                />
                <s.Art className="w-[62%] h-[62%] text-accent relative" />
                <figcaption className="absolute bottom-3 inset-x-0 text-center text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                  {s.caption}
                </figcaption>
              </figure>
            </div>

            {/* node on the spine */}
            <span
              aria-hidden="true"
              className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-background border border-border serif italic text-accent text-[15px] transition-transform duration-500 ease-out ${
                isVisible ? "scale-100" : "scale-75"
              }`}
            >
              {s.n}
            </span>

            {/* copy */}
            <div className={`mt-7 md:mt-0 self-center ${flip ? "md:order-1 md:text-right" : ""}`}>
              <div className="flex md:hidden items-baseline gap-4">
                <span className="serif italic text-accent text-[30px]">{s.n}</span>
                {s.tag && <span className="eyebrow text-accent">{s.tag}</span>}
              </div>
              {s.tag && (
                <div className={`hidden md:block eyebrow text-accent mb-3`}>{s.tag}</div>
              )}
              <h3 className="mt-3 md:mt-0 serif text-[24px] md:text-[32px] leading-[1.15] tracking-[-0.01em]">
                {s.title}
              </h3>
              <p
                className={`mt-4 text-[15px] md:text-[16px] leading-[1.85] text-muted-foreground max-w-xl ${
                  flip ? "md:ml-auto" : ""
                }`}
              >
                {s.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default ProcessJourney;
