import type { ReactNode } from "react";

/**
 * Tadao Ando vocabulary — geometry, hairlines, silence.
 * Court  = daylit concrete surface (light)
 * Chamber = shadowed concrete volume (dark)
 * Everything sits on a single left axis; nothing is decorated.
 */

export function Court({
  id,
  children,
  className = "",
  tight = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`formwork relative border-t border-border bg-background ${
        tight ? "py-20 md:py-28" : "py-24 md:py-44"
      } ${className}`}
    >
      <Axis />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-12">{children}</div>
    </section>
  );
}

export function Chamber({
  id,
  children,
  className = "",
  tight = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`on-dark concrete-dark formwork-dark relative border-t border-background/10 text-background ${
        tight ? "py-20 md:py-28" : "py-24 md:py-44"
      } ${className}`}
    >
      <Axis dark />
      <div className="relative z-[1] mx-auto max-w-[1240px] px-5 md:px-12">{children}</div>
    </section>
  );
}

/** Two thin structural lines — the grid made visible, as in a plan drawing. */
export function Axis({ dark = false }: { dark?: boolean }) {
  const c = dark ? "bg-background/10" : "bg-foreground/10";
  return (
    <>
      <div className={`pointer-events-none absolute inset-y-0 left-[7%] w-px ${c}`} />
      <div className={`pointer-events-none absolute inset-y-0 right-[7%] hidden w-px md:block ${c}`} />
    </>
  );
}

export function Plate({ n, label }: { n: string; label: string }) {
  return (
    <div className="plate flex items-center gap-4">
      <span>{n}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}

/** Section title: plate above, oversized serif, then a hairline. */
export function Title({
  n,
  label,
  children,
  lead,
  className = "",
}: {
  n: string;
  label: string;
  children: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <header className={className}>
      <Plate n={n} label={label} />
      <h2 className="mt-10 max-w-4xl serif text-[34px] leading-[1.06] tracking-[-0.02em] md:text-[64px] md:leading-[1.02]">
        {children}
      </h2>
      {lead ? (
        <p className="mt-8 max-w-xl text-[15px] leading-[2] opacity-70 md:text-[16px]">{lead}</p>
      ) : null}
      <div className="mt-12 h-px w-full bg-current opacity-15 md:mt-16" />
    </header>
  );
}

/** A numbered ledger row — the only "list" this design admits. */
export function Row({
  index,
  head,
  body,
  aside,
}: {
  index: string;
  head: ReactNode;
  body?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-current/15 py-8 md:grid-cols-[5rem_1fr_10rem] md:gap-x-10 md:py-10">
      <div className="plate pt-2 text-current opacity-40">{index}</div>
      <div className="min-w-0">
        <h3 className="serif text-[22px] leading-tight tracking-[-0.01em] md:text-[28px]">{head}</h3>
        {body ? (
          <p className="mt-4 max-w-xl text-[14px] leading-[1.9] opacity-65 md:text-[15px]">{body}</p>
        ) : null}
      </div>
      {aside ? (
        <div className="col-start-2 mt-5 text-[10px] uppercase tracking-[0.24em] opacity-55 md:col-start-3 md:mt-2 md:text-right">
          {aside}
        </div>
      ) : (
        <div className="hidden md:block" />
      )}
    </div>
  );
}

/** Monolithic figure — a single number carved into the wall. */
export function Figure({ n, label }: { n: string; label: string }) {
  return (
    <div className="py-10 md:py-16">
      <div className="serif text-[46px] leading-none tracking-[-0.03em] md:text-[76px]">{n}</div>
      <div className="mt-6 max-w-[16rem] text-[10px] uppercase leading-[1.9] tracking-[0.26em] opacity-55 md:text-[11px]">
        {label}
      </div>
    </div>
  );
}

export function Quiet({ children }: { children: ReactNode }) {
  return (
    <p className="serif italic text-[20px] leading-[1.55] tracking-[-0.01em] md:text-[30px]">
      {children}
    </p>
  );
}
