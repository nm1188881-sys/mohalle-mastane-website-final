import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { ProcessJourney } from "@/components/ProcessJourney";
import { Chamber, Court, Figure, Plate, Quiet, Row, Title } from "@/components/Ando";
import strayDog from "@/assets/stray-dog-courtyard.jpg.asset.json";
import strayCat from "@/assets/stray-cat-corridor.jpg.asset.json";
import strayDogs from "@/assets/stray-dogs-resting.jpg.asset.json";
import { Rail, RailItem } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";
import { StoryCard } from "@/components/StoryCard";
import { rescueStories, fostered } from "@/data/stories";


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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Mohalle Mastane" className="h-10 w-auto md:h-12" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="serif text-[15px] uppercase tracking-[0.18em] md:text-[17px]">
              Mohalle Mastane
            </span>
            <span className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground md:text-[10px]">
              Coexistence · Compassion · Togetherness
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-foreground px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-background transition-colors hover:bg-accent md:px-5 md:py-2.5 md:text-[11px]"
          >
            Join Group
          </a>
          <SiteMenu active="Community" />
        </div>
      </div>
    </header>
  );
}

/* 01 — the approach: a long empty wall before anything is said. */
function Hero() {
  return (
    <section className="formwork relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-background pb-16 pt-32 md:pb-28">
      <img
        src={strayDogs.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.28]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="pointer-events-none absolute inset-y-0 left-[7%] w-px bg-foreground/10" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-foreground/10 md:block" />
      <div className="pointer-events-none absolute inset-x-0 top-[38%] h-px bg-foreground/10" />
      {/* the daylight falling across the wall */}
      <div className="light-shaft pointer-events-none absolute inset-0" />


      <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-12">
        <Plate n="01" label="Who We Are · 150 Members Strong" />
        <h1 className="mt-12 max-w-5xl serif font-bold text-[46px] leading-[1.0] tracking-[-0.035em] text-foreground md:mt-20 md:text-[104px] md:leading-[0.94]">
          Not an organisation
          <br />
          sitting in one place.
        </h1>
        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:mt-20 md:grid-cols-12 md:gap-16">
          <p className="serif italic text-[22px] leading-[1.35] text-accent md:col-span-5 md:text-[34px]">
            A community-driven
            <br />
            workforce.
          </p>
          <div className="md:col-span-7 md:pt-2">
            <p className="max-w-xl text-[15px] leading-[2] text-muted-foreground md:text-[16px]">
              Mohalle Mastane belongs to all of us. Born in 2025 from one person's vision, it is now
              a living circle of 150+ neighbours in the city — feeders, rescuers, foster parents,
              students and well-wishers — caring for the street animals of every neighbourhood.
            </p>
            <p className="mt-10 text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
              By the community · For the community · To the community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 02 — the shadowed volume: numbers cut into dark concrete. */
function Stats() {
  const stats = [
    { n: "200+", label: "Animals helped in 8 months" },
    { n: "150", label: "Community members" },
    { n: "10", label: "Active volunteers" },
    { n: "10", label: "Foster & adoptive parents" },
  ];
  return (
    <Chamber>
      <Title n="02" label="In the last 8 months" lead="Every number here is a neighbour who showed up, a street that stayed kinder, an animal that lived because the community decided to care out loud.">
        Small beginnings.
        <br />
        <span className="italic text-accent">Real impact.</span>
      </Title>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-1 md:px-8 ${i % 2 !== 0 ? "border-l border-background/12" : ""} ${
              i !== 0 ? "md:border-l md:border-background/12" : "md:border-l-0"
            } ${i >= 2 ? "border-t border-background/12 md:border-t-0" : ""}`}
          >
            <Figure n={s.n} label={s.label} />
          </div>
        ))}
      </div>
    </Chamber>
  );
}

/* 03 — the neighbourhood's faces: animals in the architecture. */
function Faces() {
  return (
    <Court>
      <Plate n="03" label="The Neighbourhood" />
      <h2 className="mt-12 max-w-4xl serif font-bold text-[34px] leading-[1.06] tracking-[-0.02em] md:mt-16 md:text-[64px] md:leading-[1.02]">
        The faces we pass by.
        <br />
        <span className="italic text-accent">The lives we share a lane with.</span>
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
        <figure>
          <img
            src={strayDog.url}
            alt="A street dog resting in a sunlit concrete courtyard"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Street dog · resting in the light
          </figcaption>
        </figure>
        <figure>
          <img
            src={strayCat.url}
            alt="A street cat paused in a narrow concrete corridor"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Street cat · watching from the corridor
          </figcaption>
        </figure>
        <figure>
          <img
            src={strayDogs.url}
            alt="Two stray dogs sleeping together on a concrete floor"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Companions · warmth in the same corner
          </figcaption>
        </figure>
      </div>
    </Court>
  );
}

/* Real stories — the shared card format, scrolled horizontally. */
function Stories() {
  return (
    <Court id="stories">
      <Title
        n="03b"
        label="Real Stories"
        lead="Every case below started as a message from a neighbour. Have one of your own? Send it to us and we'll add it here."
      >
        Real stories,
        <br />
        <span className="italic text-accent">from real streets.</span>
      </Title>
      <div className="mt-12">
        <Rail label="Swipe through the stories →">
          {rescueStories.map((s, i) => (
            <RailItem key={s.id}>
              <Reveal delay={i * 80}>
                <StoryCard story={s} />
              </Reveal>
            </RailItem>
          ))}
        </Rail>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <div className="plate mb-6">Fostered &amp; Cared</div>
        <Rail label="Animals fostered by local rescuers →">
          {fostered.map((s, i) => (
            <RailItem key={s.id}>
              <Reveal delay={i * 80}>
                <StoryCard story={s} />
              </Reveal>
            </RailItem>
          ))}
        </Rail>
      </div>

      <a
        href="mailto:hello@streetkind.org?subject=My rescue story"
        className="mt-14 inline-flex items-center border border-foreground/40 px-8 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors hover:border-accent hover:text-accent"
      >
        Share your story →
      </a>
    </Court>
  );
}



/* 04 — four principles, held apart by air. */
function Pillars() {
  const items = [
    { title: "Every message matters", body: "Every photo you share of an injured animal — we see it, we act on it." },
    { title: "Every case is tracked", body: "Logged from the first message to the final update — nothing falls through." },
    { title: "Neighbours leading neighbours", body: "Experienced rescuers from your own neighbourhood guide every step." },
    { title: "A circle, not a service", body: "It closes only when the animal is safe — and the community knows." },
  ];
  return (
    <Court>
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Plate n="04" label="Principles" />
          <p className="mt-10 serif font-bold text-[26px] leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Four rules,
            <br />
            <span className="italic text-accent">nothing more.</span>
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-border">
            {items.map((it, i) => (
              <Row key={it.title} index={`0${i + 1}`} head={it.title} body={it.body} />
            ))}
          </div>
        </div>
      </div>
    </Court>
  );
}

/* 05 — proportion drawn as measured bars. */
function Composition() {
  const rows = [
    { pct: 10, label: "Active rescuers on the ground" },
    { pct: 30, label: "Support through funding, reviews & temporary help" },
    { pct: 60, label: "Yet to join the movement — and that is who we are here for" },
  ];
  const phases = [
    {
      tag: "Phase One — Now",
      num: "10 → 50",
      body: "Grow active rescuers from 10% to 50% of the community. Include more neighbours in on-ground rescue coordination.",
    },
    {
      tag: "Phase Two — Next",
      num: "50 → 80",
      body: "Expand to a point where 80% of members are actively contributing — through rescue, fostering, funding, or awareness.",
    },
  ];
  return (
    <Court>
      <Title n="05" label="150 Members Strong" lead="Every person in this group matters — whether you rescue actively, contribute occasionally, or are still finding your way in.">
        Growing,
        <br />
        <span className="italic text-accent">together.</span>
      </Title>

      <div>
        {rows.map((r) => (
          <div key={r.label} className="border-b border-border py-8 md:py-10">
            <div className="flex items-baseline justify-between gap-6">
              <span className="max-w-2xl text-[14px] leading-[1.8] text-foreground/80 md:text-[16px]">
                {r.label}
              </span>
              <span className="serif text-[30px] leading-none text-accent md:text-[44px]">
                {r.pct}%
              </span>
            </div>
            <div className="mt-5 h-px w-full bg-border">
              <div className="h-px bg-accent" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-2">
        {phases.map((p, i) => (
          <div
            key={p.tag}
            className={`border-t border-border py-10 md:py-14 ${
              i === 1 ? "md:border-l md:border-border md:pl-14" : "md:pr-14"
            }`}
          >
            <div className="plate">{p.tag}</div>
            <div className="mt-6 serif text-[36px] leading-none tracking-[-0.02em] md:text-[54px]">
              {p.num}
              <span className="text-accent">%</span>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-[1.9] text-muted-foreground md:text-[15px]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Court>
  );
}

/* 06 — the passage: how a case walks through the building. */
function Process() {
  return (
    <Court>
      <Title n="06" label="The Process" lead="Five steps, drawn out — from the moment you notice an animal in trouble to the moment the case comes back to the group as an update.">
        How this community
        <br />
        <span className="italic text-accent">functions.</span>
      </Title>
      <ProcessJourney />
      <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-16">
        <div className="plate md:col-span-4">On veterinary care</div>
        <p className="max-w-2xl text-[14px] leading-[2] text-muted-foreground md:col-span-8 md:text-[15px]">
          Our city, like many towns, currently lacks advanced animal medical infrastructure. We work
          with the Government Veterinary Hospital today and are deeply grateful for the support it
          provides. We know that building proper, dedicated animal medical facilities is one of the
          most urgent needs for this city — and we are actively looking for individuals,
          organisations, or institutions who share this vision and would like to support or
          collaborate with us.
        </p>
      </div>
    </Court>
  );
}

/* 07 — the record wall. */
function Cases() {
  const cases = [
    {
      id: "CR-001",
      rows: [
        ["Name", "Chiku"],
        ["Location", "City centre"],
        ["Condition", "Paralysed — could not walk"],
        ["Supported by", "Ayush — cared for over a year"],
        ["Fostered by", "Aditi — long-term foster care"],
      ],
      status: "In Care — Ongoing",
    },
    {
      id: "CR-002",
      rows: [
        ["Name", "Piggy"],
        ["Location", "Sector 9"],
        ["Condition", "Fracture — unable to walk"],
        ["Rescued by", "Mohalle Mastane Rescue Team"],
        ["Adopted by", "Bhavna — permanently adopted"],
      ],
      status: "Recovered & Adopted",
    },
  ];
  return (
    <Chamber>
      <Title n="07" label="Real Stories" lead="Every rescue in this group is documented — so every animal is accounted for, and every person who helped is remembered.">
        What every case
        <br />
        <span className="italic text-accent">looks like.</span>
      </Title>

      <div className="grid md:grid-cols-2">
        {cases.map((c, i) => (
          <article
            key={c.id}
            className={`border-t border-background/12 py-10 md:py-14 ${
              i === 1 ? "md:border-l md:border-background/12 md:pl-14" : "md:pr-14"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span className="plate">Case Record</span>
              <span className="serif italic text-[18px] text-accent">{c.id}</span>
            </div>
            <dl className="mt-8">
              {c.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-background/10 py-4 text-[14px] md:text-[15px]"
                >
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-background/45 pt-1">
                    {k}
                  </dt>
                  <dd className="text-background/90">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 text-[10px] uppercase tracking-[0.26em] text-accent">
              {c.status}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-10 border-t border-background/12 pt-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Quiet>"Because you deserve to know what happened."</Quiet>
        </div>
        <p className="max-w-xl text-[14px] leading-[2] text-background/65 md:col-span-7 md:text-[15px]">
          When you stopped your day to photograph that dog, when you stayed with an injured cat
          until someone arrived — that moment had a result. These case records exist to close that
          loop for you: every name, every location, every person who helped is remembered.
        </p>
      </div>
    </Chamber>
  );
}

/* 08 — the address to the young. */
function Youth() {
  return (
    <Court>
      <Plate n="08" label="Especially, to the youth of this neighbourhood" />
      <h2 className="mt-12 max-w-4xl serif font-bold text-[36px] leading-[1.05] tracking-[-0.03em] md:mt-16 md:text-[76px] md:leading-[0.98]">
        You have the energy,
        <br />
        the reach, the awareness
        <br />
        <span className="italic text-accent">this movement needs.</span>
      </h2>
      <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-16">
        <div className="space-y-7 text-[15px] leading-[2] text-muted-foreground md:col-span-7 md:text-[16px]">
          <p>
            Animal welfare is not someone else's responsibility — it never was. Every street you
            walk, every colony you live in — you can be the reason an animal survives.
          </p>
          <p>
            We are not asking you to become a full-time rescuer. We are asking you to{" "}
            <span className="italic text-foreground">care out loud.</span>
          </p>
        </div>
        <div className="md:col-span-5">
          <Quiet>That ripple is how movements begin.</Quiet>
        </div>
      </div>
    </Court>
  );
}

/* 09 — the doors: every way in, given equal weight. */
function TakeAction() {
  const items = [
    { pre: "If you see", title: "An injured or sick animal", body: "Post a photo and location in the group. That is enough to start." },
    { pre: "If there is", title: "Immediate danger", body: "Tag an experienced rescuer right away. They are your neighbours." },
    { pre: "If you can", title: "Monitor a recovering animal", body: "Offer to feed, check in, or observe daily. Small acts matter enormously." },
    { pre: "If you are willing", title: "Foster or shelter temporarily", body: "Let us know — we will guide you through every step." },
    { pre: "If you want to", title: "Spread awareness", body: "Share cases, invite others, inspire your colony to care." },
    { pre: "If you want to", title: "Learn and help regularly", body: "Tell us — we will connect you with experienced rescuers near you." },
  ];
  return (
    <Court>
      <Title n="09" label="Take Action">
        How you can be
        <br />
        <span className="italic text-accent">part of this.</span>
      </Title>
      <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`border-b border-border py-10 md:py-14 sm:px-8 lg:px-10 ${
              i % 2 === 1 ? "sm:border-l sm:border-border" : ""
            } ${i % 3 !== 0 ? "lg:border-l lg:border-border" : "lg:border-l-0"} ${
              i % 2 === 0 ? "sm:pl-0" : ""
            }`}
          >
            <div className="plate">{it.pre}</div>
            <h3 className="mt-5 serif text-[21px] leading-tight tracking-[-0.01em] md:text-[25px]">
              {it.title}
            </h3>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.9] text-muted-foreground">
              {it.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          All of this starts with one tap · Free · Open to all residents
        </p>
        <a
          href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-foreground px-9 py-5 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent"
        >
          Join on WhatsApp
        </a>
      </div>
    </Court>
  );
}

/* 10 — the last dark room. */
function Closing() {
  return (
    <Chamber>
      <div className="mx-auto max-w-3xl">
        <Quiet>
          "Every neighbourhood has its own story. Ours is one of coexistence, care, and collective
          action."
        </Quiet>
        <div className="mt-16 border-t border-background/12">
          {[
            "This is not a helpline. It is not a service.",
            "It is a community that decided to take responsibility for its own streets.",
            "Where the experienced guide the willing.",
            "Where the youth bring energy to the elders' experience.",
            "Where no case is too small and no person is too ordinary to make a difference.",
          ].map((line) => (
            <p
              key={line}
              className="border-b border-background/10 py-5 text-[14px] leading-[1.9] text-background/70 md:text-[15px]"
            >
              {line}
            </p>
          ))}
        </div>
        <p className="mt-16 serif text-[22px] leading-[1.4] text-background md:text-[28px]">
          Mohalle Mastane is not run from above.
          <br />
          <span className="italic text-accent">It lives in you</span> — in every member of this
          group.
        </p>
      </div>
    </Chamber>
  );
}

function FooterMini() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-3 md:px-12 md:py-20">
        <div>
          <div className="plate mb-6">Get in touch</div>
          <p className="text-[14px] leading-[2] text-foreground/85">
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
          <div className="plate mb-6">Explore</div>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/" hash="about" className="hover:text-accent">About</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events & Volunteers</Link></li>
            <li><Link to="/fundraising" className="hover:text-accent">Fundraising</Link></li>
            <li><Link to="/vision" className="hover:text-accent">Vision</Link></li>
          </ul>
        </div>
        <div>
          <div className="plate mb-6">Mohalle Mastane · 2025</div>
          <p className="text-[13px] leading-[2] text-muted-foreground">
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
      <Faces />
      <Stories />
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
