import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { Sprig } from "@/components/Sprig";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — A Future of Coexistence | Mohalle Mastane" },
      {
        name: "description",
        content:
          "Our dream for the city: a connected care ecosystem — a community clinic, a shelter, sterilisation at scale and neighbourhoods that look after their own animals.",
      },
      { property: "og:title", content: "A future of coexistence — Mohalle Mastane" },
      {
        property: "og:description",
        content:
          "Building connected care systems that heal lives and cities — clinic, shelter, and everyday coexistence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionPage,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Mohalle Mastane" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="serif text-[15px] md:text-[17px] tracking-[0.18em] uppercase">
              Mohalle Mastane
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Coexistence · Compassion · Togetherness
            </span>
          </span>
        </Link>
        <SiteMenu active="Vision" />
      </div>
    </header>
  );
}

const pillars = [
  {
    n: "01",
    title: "A community clinic",
    body: "A dependable place for treatment — where an injured animal from any neighbourhood can be brought without a scramble for help.",
  },
  {
    n: "02",
    title: "A shelter for recovery",
    body: "Space for healing and fostering, so animals aren't sent back to the street mid-treatment.",
  },
  {
    n: "03",
    title: "Sterilisation at scale",
    body: "Steady, humane population control across neighbourhoods — the only lasting answer to street suffering.",
  },
  {
    n: "04",
    title: "Neighbourhoods that care on their own",
    body: "Every lane with its own feeders, rescuers and caretakers — a network that no longer depends on any one person.",
  },
];

function VisionPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Nav />

      <section className="concrete light-shaft relative pt-32 md:pt-44 pb-20 md:pb-32 border-b border-border overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-foreground/8" />
        <div className="pointer-events-none absolute inset-y-0 left-[38%] w-px bg-foreground/8" />
        <div className="relative mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="plate mb-10">01 — Our Dream · Our Ecosystem</div>
          <h1 className="serif text-[44px] leading-[1.02] md:text-[84px] md:leading-[0.96] tracking-[-0.03em] max-w-4xl">
            A future of
            <br />
            <span className="italic text-accent">coexistence.</span>
          </h1>
          <Sprig className="mt-8 h-6 w-28 text-accent" />
          <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-[2] text-muted-foreground">
            We are building connected care systems that heal lives and cities —
            starting from one neighbourhood in the city, and designed to be repeated
            anywhere a community decides its animals belong to it.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="plate mb-10">02 — What We Are Building</div>
          <h2 className="serif text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.01em]">What we are building</h2>
          <div className="mt-12 grid md:grid-cols-2 border-t border-border">
            {pillars.map((p, i) => (
              <article
                key={p.n}
                className={`p-7 md:p-12 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="flex items-baseline gap-5">
                  <span className="serif italic text-accent text-[20px]">{p.n}</span>
                  <h3 className="serif text-[22px] md:text-[28px] leading-snug tracking-[-0.01em]">{p.title}</h3>
                </div>
                <p className="mt-5 text-[14px] md:text-[15px] leading-[1.85] text-foreground/80 max-w-md">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="plate mb-10">04 — The System</div>
          <h2 className="serif text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.01em]">
            How it <span className="italic text-accent">works.</span>
          </h2>
          <div className="mt-12 max-w-3xl">
            <p className="text-[15px] md:text-[17px] leading-[2] text-muted-foreground">
              This is a vision — not yet built. What follows is the shape of the system we hope to grow into, neighbourhood by neighbourhood, with the people who choose to join.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-12 border-t border-border pt-10">
            <article>
              <div className="plate mb-5">01</div>
              <h3 className="serif text-[20px] md:text-[24px] leading-snug tracking-[-0.01em]">A caller reports</h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-foreground/80">
                Anyone in the neighbourhood can raise an alert — an injured animal, a new litter, a dog that needs sterilisation.
              </p>
            </article>
            <article>
              <div className="plate mb-5">02</div>
              <h3 className="serif text-[20px] md:text-[24px] leading-snug tracking-[-0.01em]">A responder acts</h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-foreground/80">
                Trained volunteers, feeders and caretakers coordinate through a shared network so no call is left alone.
              </p>
            </article>
            <article>
              <div className="plate mb-5">03</div>
              <h3 className="serif text-[20px] md:text-[24px] leading-snug tracking-[-0.01em]">The system learns</h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-foreground/80">
                Every case feeds back into a shared map of needs, resources and outcomes — so care becomes more reliable over time.
              </p>
            </article>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/fundraising"
              hash="donate"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-ink text-[11px] uppercase tracking-[0.28em] hover:bg-background transition-colors"
            >
              Support the Vision
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-[11px] uppercase tracking-[0.28em] hover:border-accent hover:text-accent transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="on-dark water-temple text-background py-24 md:py-36 border-t border-border">
        <div className="relative z-[1] mx-auto max-w-[900px] px-5 md:px-12 text-center">
          <div className="plate text-accent mb-8">05 — The Long View</div>
          <p className="serif text-[26px] md:text-[38px] leading-[1.25]">
            “From one neighbourhood to a nation — a country where kindness to animals
            is ordinary, not exceptional.”
          </p>
          <Sprig className="mx-auto mt-10 h-6 w-28 text-accent" />
        </div>
      </section>
    </main>
  );
}
