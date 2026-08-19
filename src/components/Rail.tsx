import { useCallback, useRef, type ReactNode } from "react";

/**
 * Rail — a horizontal, left-to-right scroller with snap points.
 * Keeps card sections short instead of stacking vertically.
 */
export function Rail({
  children,
  label,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 620), behavior: "smooth" });
  }, []);

  const btn = `inline-flex h-10 w-10 items-center justify-center border text-[15px] transition-colors ${
    dark
      ? "border-background/25 text-background/80 hover:border-accent hover:text-accent"
      : "border-foreground/25 text-foreground/70 hover:border-accent hover:text-accent"
  }`;

  return (
    <div className={className}>
      <div className="mb-5 flex items-center justify-between gap-6">
        <span className="plate">{label ?? "Scroll →"}</span>
        <div className="flex gap-2">
          <button type="button" aria-label="Scroll left" className={btn} onClick={() => scrollBy(-1)}>
            ←
          </button>
          <button type="button" aria-label="Scroll right" className={btn} onClick={() => scrollBy(1)}>
            →
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-3 md:mx-0 md:gap-8 md:px-0"
      >
        {children}
      </div>
    </div>
  );
}

export function RailItem({ children }: { children: ReactNode }) {
  return (
    <div className="w-[80vw] shrink-0 snap-start sm:w-[360px] md:w-[380px]">{children}</div>
  );
}
