import type { Story } from "@/data/stories";

/**
 * StoryCard — one consistent card format for every story surface
 * (rescue stories, fostered animals, community stories).
 */
export function StoryCard({ story, dark = false }: { story: Story; dark?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col border transition-all duration-500 ${
        dark
          ? "border-background/15 bg-background/[0.04] hover:border-accent/60"
          : "border-border bg-card hover:border-accent/70"
      } hover:-translate-y-1`}
    >
      <div className="relative overflow-hidden">
        <img
          src={story.image}
          alt={story.alt}
          loading="lazy"
          className="h-[220px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05] md:h-[260px]"
        />
        <span
          className={`absolute left-0 top-0 px-3 py-2 text-[9px] uppercase tracking-[0.28em] ${
            dark ? "bg-background text-foreground" : "bg-foreground text-background"
          }`}
        >
          {story.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="serif text-[24px] font-bold leading-tight tracking-[-0.01em] md:text-[28px]">
          {story.name}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.26em] opacity-55">{story.place}</p>
        <p className="mt-5 flex-1 text-[14px] leading-[1.85] opacity-75">{story.body}</p>
        <p className="mt-6 flex items-center gap-3 border-t border-current/15 pt-5 text-[10px] uppercase tracking-[0.26em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {story.status}
        </p>
      </div>
    </article>
  );
}
