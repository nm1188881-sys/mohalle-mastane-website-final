import { useEffect, useState, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

type Icon = (props: { className?: string }) => ReactElement;

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconCommunity: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.2" />
      <path d="M3.5 18c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 13.5c2.4 0 4.3 1.6 4.5 4" />
    </g>
  </svg>
);

const IconVision: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.6" />
    </g>
  </svg>
);

const IconEvents: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
      <path d="M12 17.5c-2.2-1.8-3.6-2.9-3.6-4.3a1.9 1.9 0 0 1 3.6-.9 1.9 1.9 0 0 1 3.6.9c0 1.4-1.4 2.5-3.6 4.3z" />
    </g>
  </svg>
);

const IconFundraising: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <path d="M12 20v-7" />
      <path d="M12 13c0-3.5 2.6-6 6-6 0 3.5-2.6 6-6 6z" />
      <path d="M12 15c-3 0-5-1.9-5-4.8 3 0 5 1.9 5 4.8z" />
      <path d="M7 20h10" />
    </g>
  </svg>
);

const IconDonate: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <path d="M12 11.5c-2.4-2-3.9-3.1-3.9-4.7A2.1 2.1 0 0 1 12 5.4a2.1 2.1 0 0 1 3.9 1.4c0 1.6-1.5 2.7-3.9 4.7z" />
      <path d="M3.5 15.5c1.6-1 3-.6 4.4.2l2.3 1.3" />
      <path d="M9 17h3.4c1 0 1.2-1.4.2-1.7l-2.6-.8" />
      <path d="M13.5 17.5l5-2.2c1.4-.6 2.4 1 1.2 1.9l-5.2 3.6c-.9.6-1.7.7-2.7.3l-4.6-1.9" />
    </g>
  </svg>
);

const IconArrow: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g {...s}>
      <path d="M5 12h13M13 6.5l5.5 5.5L13 17.5" />
    </g>
  </svg>
);

type Item = {
  n: string;
  label: string;
  sub: string;
  to: string;
  hash?: string;
  Icon: Icon;
};

export const menuItems: Item[] = [
  { n: "01", label: "Community", sub: "Stories. People. Impact.", to: "/community", Icon: IconCommunity },
  { n: "02", label: "Vision", sub: "Our Dream. Our Ecosystem.", to: "/vision", Icon: IconVision },
  { n: "03", label: "Events & Volunteers", sub: "Get Involved. Be the Change.", to: "/events", Icon: IconEvents },
  { n: "04", label: "Fundraising", sub: "Projects. Transparency. Impact.", to: "/fundraising", Icon: IconFundraising },
  { n: "05", label: "Donate", sub: "Support. Care. Transform.", to: "/fundraising", hash: "donate", Icon: IconDonate },
];

export function SiteMenu({ active, tone = "light" }: { active?: string; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={`inline-flex min-h-11 min-w-11 items-center gap-3 px-3 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.26em] transition-colors ${
          tone === "dark"
            ? "text-background/70 hover:text-accent"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span className="flex flex-col gap-[5px]">
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
        <span className="hidden sm:inline">Menu</span>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <div className="on-dark absolute inset-y-0 right-0 w-full sm:max-w-[520px] concrete-dark text-background overflow-y-auto border-l border-background/10">
            <div className="px-6 md:px-10 pt-6 pb-10">
              <div className="flex items-start justify-between">
                <img src={logo.url} alt="Mohalle Mastane" className="h-14 w-auto" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center text-background/70 hover:text-accent transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <g {...s}>
                      <path d="M6 6l12 12M18 6L6 18" />
                    </g>
                  </svg>
                </button>
              </div>

              <div className="mt-8">
                <div className="serif text-[34px] md:text-[42px] leading-[1.05] tracking-[0.12em] uppercase text-background">
                  Mohalle
                  <br />
                  Mastane
                </div>
                <div className="mt-3 text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-accent">
                  Coexistence · Compassion · Togetherness
                </div>
              </div>

              <nav className="mt-10">
                <ul className="divide-y divide-background/10">
                  {menuItems.map((item) => {
                    const isActive = active === item.label;
                    return (
                      <li key={item.n}>
                        <Link
                          to={item.to}
                          hash={item.hash}
                          onClick={() => setOpen(false)}
                          className={`group flex items-center gap-4 py-4 px-3 -mx-3 transition-colors ${
                            isActive ? "bg-background/10" : "hover:bg-background/5"
                          }`}
                        >
                          <span className="serif italic text-accent text-[15px] w-7">{item.n}</span>
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/15 bg-background/5 text-accent">
                            <item.Icon className="h-5 w-5" />
                          </span>
                          <span className="flex-1">
                            <span className="block serif text-[22px] md:text-[26px] leading-tight text-background">
                              {item.label}
                            </span>
                            <span className="block mt-1 text-[12px] text-background/60">
                              {item.sub}
                            </span>
                          </span>
                          <IconArrow className="h-5 w-5 text-background/40 group-hover:text-accent transition-colors" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <a
                href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
                target="_blank"
                rel="noreferrer"
                className="mt-10 flex items-center gap-4 rounded-full bg-background text-ink px-5 py-4 hover:bg-accent transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20">
                  <IconCommunity className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block serif text-[22px] leading-tight">Join The Movement</span>
                  <span className="block text-[12px] opacity-70">Together, we build a kinder world.</span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-background">
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>

              <p className="mt-8 text-center serif italic text-[15px] text-background/60">
                Because every life deserves to belong.
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default SiteMenu;
