import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { Sprig } from "@/components/Sprig";
import { ProcessJourney } from "@/components/ProcessJourney";


export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Mohalle Mastane" },
      {
        name: "description",
        content:
          "By the community. For the community. To the community. How the Mohalle Mastane circle in the city rescues, fosters and protects street animals — neighbours leading neighbours.",
      },
      { property: "og:title", content: "Community — Mohalle Mastane" },
      {
        property: "og:description",
        content:
          "A community-driven workforce of 150+ neighbours rescuing, fostering and caring for street animals across the city.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
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
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.26em] hover:bg-accent transition-colors"
          >
            Join Group
          </a>
          <SiteMenu active="Community" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="concrete light-shaft relative pt-32 md:pt-44 pb-20 md:pb-32 border-b border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-foreground/8" />
      <div className="pointer-events-none absolute inset-y-0 left-[38%] w-px bg-foreground/8" />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="plate mb-10">01 — Who We Are · 150 Members Strong</div>
        <h1 className="serif text-[44px] leading-[1.02] md:text-[84px] md:leading-[0.96] tracking-[-0.03em] text-foreground max-w-4xl">
          Not any organisation
          <br />
          sitting in one place.
          <br />
          <span className="italic text-accent">A community-driven workforce.</span>
        </h1>
        <Sprig className="mt-8 h-6 w-28 text-accent" />
        <p className="mt-8 max-w-2xl text-[15px] md:text-[18px] leading-[2] text-muted-foreground">
          Mohalle Mastane belongs to all of us. Born in 2025 from one
          person's vision, it is now a living circle of 150+ neighbours in
          the city — feeders, rescuers, foster parents, students and
          well-wishers — caring for the street animals of every neighbourhood.
        </p>
        <p className="mt-6 serif italic text-[18px] md:text-[22px] text-foreground/80">
          "By the community. For the community. To the community."
        </p>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "200+", label: "Animals helped in 8 months" },
    { n: "150", label: "Community members" },
    { n: "10", label: "Active volunteers" },
    { n: "10", label: "Foster & adoptive parents" },
  ];
  return (
    <section className="on-dark concrete-dark light-shaft-dark text-background border-b border-border">
      <div className="relative z-[1] mx-auto max-w-[1400px] px-5 md:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="plate mb-8 text-accent">02 — In the last 8 months</div>
            <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.01em] text-background">
              Small beginnings.
              <br />
              <span className="italic">Real impact.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3 text-[14px] md:text-[15px] leading-[1.85] text-background/70">
            Every number here is a neighbour who showed up, a street that
            stayed kinder, an animal that lived because the community
            decided to care out loud.
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-background/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 md:py-14 px-2 md:px-6 ${i !== 0 ? "md:border-l border-background/15" : ""} ${i % 2 !== 0 ? "border-l border-background/15" : ""} ${i >= 2 ? "border-t border-background/15 md:border-t-0" : ""}`}
            >
              <div className="serif text-[44px] md:text-[64px] leading-none tracking-[-0.02em] text-background">
                {s.n}
              </div>
              <div className="mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-background/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      icon: "👁️",
      title: "Every message matters",
      body: "Every photo you share of an injured animal — we see it, we act on it.",
    },
    {
      icon: "📌",
      title: "Every case is tracked",
      body: "Logged from the first message to the final update — nothing falls through.",
    },
    {
      icon: "🤝",
      title: "Neighbours leading neighbours",
      body: "Experienced rescuers from your own neighbourhood guide every step.",
    },
    {
      icon: "🔄",
      title: "A circle, not a service",
      body: "It closes only when the animal is safe — and the community knows.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {items.map((it) => (
            <div key={it.title} className="border-t border-border pt-7">
              <div className="text-[28px] mb-4">{it.icon}</div>
              <h3 className="serif text-[22px] md:text-[26px] tracking-[-0.01em]">
                {it.title}
              </h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-muted-foreground max-w-md">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Composition() {
  const rows = [
    { pct: "10%", label: "Active rescuers on the ground" },
    { pct: "30%", label: "Support through funding, reviews & temporary help" },
    { pct: "60%", label: "Yet to join the movement — and that is who we are here for" },
  ];
  return (
    <section className="concrete light-shaft border-y border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="plate mb-8">03 — 150 Members Strong</div>
            <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.01em]">
              Growing,
              <br />
              <span className="italic text-accent">together.</span>
            </h2>
          </div>
          <p className="md:col-span-7 md:pt-3 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            Every person in this group matters — whether you rescue
            actively, contribute occasionally, or are still finding your
            way in. The movement is built for all of you.
          </p>
        </div>
        <ul className="border-t border-border">
          {rows.map((r) => (
            <li
              key={r.pct}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[160px_1fr] items-baseline gap-6 border-b border-border py-6 md:py-8"
            >
              <span className="serif italic text-accent text-[32px] md:text-[44px] leading-none">
                {r.pct}
              </span>
              <span className="text-[14px] md:text-[16px] leading-[1.7] text-foreground/85">
                {r.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              tag: "Phase One — Now",
              num: "10% → 50%",
              body: "Grow active rescuers from 10% to 50% of the community. Include more neighbours in on-ground rescue coordination.",
            },
            {
              tag: "Phase Two — Next",
              num: "50% → 80%",
              body: "Expand to a point where 80% of members are actively contributing — through rescue, fostering, funding, or awareness.",
            },
          ].map((p) => (
            <div key={p.tag} className="border border-border bg-background p-7 md:p-9">
              <div className="eyebrow mb-4">{p.tag}</div>
              <div className="serif text-[28px] md:text-[34px] tracking-[-0.01em] italic">
                {p.num}
              </div>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="plate mb-8">04 — The Process</div>
          <h2 className="serif text-[34px] md:text-[58px] leading-[1.05] tracking-[-0.02em]">
            How this community
            <br />
            <span className="italic">functions.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            Five steps, drawn out — from the moment you notice an animal in
            trouble to the moment the case comes back to the group as an update.
          </p>
        </div>
        <ProcessJourney />

        <p className="mt-12 max-w-3xl text-[14px] md:text-[15px] leading-[1.9] text-muted-foreground border-l-2 border-accent pl-6">
          <span className="text-foreground font-medium">On veterinary care:</span>{" "}
          Our city, like many towns, currently lacks advanced animal
          medical infrastructure. We work with the Government Veterinary
          Hospital today and are deeply grateful for the support it provides.
          We know that building proper, dedicated animal medical facilities is
          one of the most urgent needs for this city — and we are actively
          looking for individuals, organisations, or institutions who share
          this vision and would like to support or collaborate with us.
        </p>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      id: "CR-001",
      name: "Chiku",
      location: "City centre",
      condition: "Paralysed — could not walk",
      supported: "Ayush — cared for over a year",
      fostered: "Aditi — long-term foster care",
      status: "In Care — Ongoing",
    },
    {
      id: "CR-002",
      name: "Piggy",
      location: "Sector 9",
      condition: "Fracture — unable to walk",
      rescued: "Mohalle Mastane Rescue Team",
      adopted: "Bhavna — permanently adopted",
      status: "Recovered & Adopted",
    },
  ];
  return (
    <section className="concrete light-shaft border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="plate mb-8">05 — Real Stories</div>
            <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.01em]">
              What every case
              <br />
              <span className="italic text-accent">looks like.</span>
            </h2>
          </div>
          <p className="md:col-span-7 md:pt-3 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            Every rescue in this group is documented — so every animal is
            accounted for, and every person who helped is remembered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article
              key={c.id}
              className="border border-border bg-background p-7 md:p-9"
            >
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <span className="eyebrow">🐾 Case Card</span>
                <span className="serif italic text-accent text-[16px]">
                  {c.id}
                </span>
              </div>
              <dl className="mt-6 space-y-4 text-[14px] md:text-[15px]">
                <Row label="🐕 Name" value={c.name} />
                <Row label="📍 Location" value={c.location} />
                <Row label="⚠️ Condition" value={c.condition} />
                {c.supported && <Row label="🤝 Supported By" value={c.supported} />}
                {c.rescued && <Row label="🤝 Rescued By" value={c.rescued} />}
                {c.fostered && <Row label="🏠 Fostered By" value={c.fostered} />}
                {c.adopted && <Row label="🏠 Adopted By" value={c.adopted} />}
              </dl>
              <div className="mt-7 pt-5 border-t border-border eyebrow text-accent">
                {c.status}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 max-w-2xl">
          <div className="eyebrow mb-4">Why It Matters</div>
          <p className="serif italic text-[22px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-foreground">
            "Because you deserve to know what happened."
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-muted-foreground">
            When you stopped your day to photograph that dog, when you stayed
            with an injured cat until someone arrived — that moment had a
            result. These case cards exist to close that loop for you — to
            show the community that every name, every location, every person
            who helped is remembered.
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}

function Youth() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1100px] px-5 md:px-12">
        <div className="plate mb-10">06 — Especially, to the youth of this neighbourhood</div>
        <h2 className="serif text-[34px] md:text-[58px] leading-[1.05] tracking-[-0.02em]">
          You have the energy,
          <br />
          the reach, the awareness
          <br />
          <span className="italic text-accent">this movement needs.</span>
        </h2>
        <div className="mt-10 space-y-6 max-w-2xl text-[15px] md:text-[17px] leading-[1.85] text-muted-foreground">
          <p>
            Animal welfare is not someone else's responsibility — it never
            was. Every street you walk, every colony you live in — you can
            be the reason an animal survives.
          </p>
          <p>
            We are not asking you to become a full-time rescuer. We are
            asking you to <span className="text-foreground italic">care out loud.</span>
          </p>
          <p className="serif italic text-foreground text-[20px] md:text-[24px]">
            That ripple is how movements begin.
          </p>
        </div>
      </div>
    </section>
  );
}

function TakeAction() {
  const items = [
    { icon: "📸", pre: "If you see", title: "An injured or sick animal", body: "Post a photo and location in the group. That is enough to start." },
    { icon: "🏃", pre: "If there is", title: "Immediate danger", body: "Tag an experienced rescuer right away. They are your neighbours." },
    { icon: "🌿", pre: "If you can", title: "Monitor a recovering animal", body: "Offer to feed, check in, or observe daily. Small acts matter enormously." },
    { icon: "🏠", pre: "If you are willing", title: "Foster or shelter temporarily", body: "Let us know — we will guide you through every step." },
    { icon: "📣", pre: "If you want to", title: "Spread awareness", body: "Share cases, invite others, inspire your colony to care." },
    { icon: "🌱", pre: "If you want to", title: "Learn and help regularly", body: "Tell us — we will connect you with experienced rescuers near you." },
  ];
  return (
    <section className="concrete light-shaft border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1300px] px-5 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="plate mb-8">07 — Take Action</div>
          <h2 className="serif text-[34px] md:text-[58px] leading-[1.05] tracking-[-0.02em]">
            How you can be
            <br />
            <span className="italic">part of this.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-7 md:p-9">
              <div className="text-[26px]">{it.icon}</div>
              <div className="mt-5 eyebrow">{it.pre}</div>
              <h3 className="mt-2 serif text-[20px] md:text-[24px] tracking-[-0.01em]">
                {it.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground">
                {it.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[14px] uppercase tracking-[0.28em] text-muted-foreground">
            All of this starts with one tap.
          </p>
          <a
            href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
          >
            Join Mohalle Mastane on WhatsApp
          </a>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Free · Open to all residents
          </p>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="on-dark concrete-dark light-shaft-dark text-background py-24 md:py-36 border-t border-border">
      <div className="relative z-[1] mx-auto max-w-[900px] px-5 md:px-12 text-center">
        <p className="serif italic text-[24px] md:text-[34px] leading-[1.4] text-background">
          "Every neighbourhood has its own story.
          <br />
          Ours is one of coexistence, care,
          <br />
          and collective action."
        </p>
        <div className="mt-12 space-y-4 text-[14px] md:text-[15px] leading-[1.9] text-background/75">
          <p>This is not a helpline. It is not a service.</p>
          <p>It is a community that decided to take responsibility for its own streets.</p>
          <p>Where the experienced guide the willing.</p>
          <p>Where the youth bring energy to the elders' experience.</p>
          <p>Where no case is too small and no person is too ordinary to make a difference.</p>
        </div>
        <p className="mt-12 serif text-[18px] md:text-[22px] text-background">
          Mohalle Mastane is not run from above.
          <br />
          <span className="italic text-accent">It lives in you</span> — in every member of this group.
        </p>
      </div>
    </section>
  );
}

function FooterMini() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="eyebrow mb-4">Get in touch</div>
          <p className="text-[14px] leading-[1.85] text-foreground/85">
            <a href="mailto:streetkind@gmail.com" className="hover:text-accent">
              streetkind@gmail.com
            </a>
            <br />
            <a href="tel:+917978562404" className="hover:text-accent">
              +91 79785 62404
            </a>
            <br />
            Our city — India
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/" hash="about" className="hover:text-accent">About</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events & Volunteers</Link></li>
            <li><Link to="/fundraising" className="hover:text-accent">Fundraising</Link></li>
            <li><Link to="/" hash="how" className="hover:text-accent">How It Works</Link></li>
            <li><Link to="/" hash="impact" className="hover:text-accent">Impact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Mohalle Mastane · 2025</div>
          <p className="text-[13px] leading-[1.85] text-muted-foreground">
            Coexistence · Compassion · Togetherness
          </p>
        </div>
      </div>
    </footer>
  );
}

function CommunityPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Pillars />
      <Composition />
      <Process />
      <Cases />
      <Youth />
      <TakeAction />
      <Closing />
      <FooterMini />
    </main>
  );
}