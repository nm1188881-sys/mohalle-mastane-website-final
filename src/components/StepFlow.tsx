import type { LucideIcon } from "lucide-react";
import { Rail, RailItem } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";

export type Step = {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

/**
 * StepFlow — "How it works" as a horizontal sequence of icon steps
 * instead of long blocks of text.
 */
export function StepFlow({
  steps,
  dark = false,
  label = "Swipe through the steps →",
}: {
  steps: Step[];
  dark?: boolean;
  label?: string;
}) {
  return (
    <Rail label={label} dark={dark}>
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <RailItem key={s.n}>
            <Reveal delay={i * 90}>
              <div
                className={`group relative flex h-full min-h-[300px] flex-col border p-7 transition-all duration-500 md:p-9 ${
                  dark
                    ? "border-background/15 bg-background/[0.04] hover:border-accent/60"
                    : "border-border bg-card hover:border-accent/70"
                } hover:-translate-y-1`}
              >
                <span className="plate">{s.n}</span>
                <Icon
                  className="mt-8 h-9 w-9 text-accent transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.1}
                />
                <h3 className="mt-8 serif text-[24px] font-bold leading-tight tracking-[-0.01em] md:text-[28px]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.9] opacity-70">{s.body}</p>
                <span className="mt-auto pt-7 text-[10px] uppercase tracking-[0.3em] opacity-35">
                  {i === steps.length - 1 ? "End" : "Next →"}
                </span>
              </div>
            </Reveal>
          </RailItem>
        );
      })}
    </Rail>
  );
}
