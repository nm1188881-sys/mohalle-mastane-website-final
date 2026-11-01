import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Coins, Scale, Users } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { Chamber, Court, Figure, Plate, Quiet, Row, Title } from "@/components/Ando";
import { Rail, RailItem } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";
import { StepFlow } from "@/components/StepFlow";
import { site } from "@/config/site";

export const Route = createFileRoute("/fundraising")({
  head: () => ({
    meta: [
      { title: "Fundraising — Every Neighbourhood Has a Story · Mohalle Mastane" },
      {
        name: "description",
        content:
          "Fundraising campaign at City Centre Mall. Building Mohalle Mastane — a nexus of coexistence: community circles, a central hub with veterinary care, public space, and a self-sustaining model.",
      },
      { property: "og:title", content: "Every Neighbourhood Has a Story — Mohalle Mastane" },
      {
        property: "og:description",
        content:
          "Building a world where compassion has an address. Help us launch the Mohalle Mastane Nexus of Coexistence in the city.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FundraisingPage,
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
              Nexus of Coexistence
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={site.razorpayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-foreground px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-background transition-colors hover:bg-accent md:px-5 md:py-2.5 md:text-[11px]"
          >
            Donate
          </a>
          <SiteMenu active="Fundraising" />
        </div>
      </div>
    </header>
  );
}

/* The chapel: a dark chamber, one slit of light. */
function Hero() {
  return (
    <section className="on-dark water-temple light-slit relative flex min-h-[94svh] flex-col justify-end overflow-hidden pb-16 pt-32 text-background md:pb-28">
      <div className="pointer-events-none absolute inset-y-0 left-[7%] w-px bg-background/10" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-background/10 md:block" />
      <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-5 md:px-12">
        <Plate n="—" label="Fundraising · City Centre Mall" />
        <h1 className="mt-12 max-w-4xl serif text-[46px] leading-[1.0] tracking-[-0.035em] text-background md:mt-24 md:text-[104px] md:leading-[0.94]">
          Every <span className="italic text-accent">neighbourhood</span>
          <br />
          has a story.
        </h1>
        <div className="mt-14 grid gap-8 border-t border-background/12 pt-10 md:mt-24 md:grid-cols-12">
          <p className="max-w-md text-[14px] leading-[2] text-background/60 md:col-span-6 md:text-[15px]">
            Building a world where compassion has an address — a nexus of care poured in concrete,
            light and daily patience.
          </p>
          <div className="md:col-span-6 md:text-right">
            <a
              href={site.razorpayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-accent px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Give a life a chance →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Gap() {
  const items = [
    { title: "No infrastructure", body: "No isolation wards. No operation theatres. No ICU. No species-specific enclosures. The current facility is overwhelmed and under-equipped." },
    { title: "Rescuers alone", body: "Individual rescuers bear the entire burden. 20–30 animals in one home. No medical support, no funding, no system behind them." },
    { title: "Inaccessible facilities", body: "Shelters on city outskirts can't serve emergencies. Rescue response time, volunteer coordination, and citizen help all depend on proximity." },
  ];
  return (
    <Chamber>
      <Title n="02" label="The Gap">
        Why existing solutions
        <br />
        are <span className="italic text-accent">not enough.</span>
      </Title>
      <div className="border-t border-background/12">
        {items.map((it, i) => (
          <Row key={it.title} index={`0${i + 1}`} head={it.title} body={it.body} />
        ))}
      </div>
      <blockquote className="mx-auto mt-20 max-w-2xl text-center">
        <div className="mx-auto mb-8 h-px w-16 bg-accent/60" />
        <Quiet>
          "The land is not merely valued for profit, nor are animals mere servants to man. Where
          action is rooted in dharma, divinity begins to awaken."
        </Quiet>
        <footer className="mt-8 text-[10px] uppercase tracking-[0.28em] text-accent">
          Mohalle Mastane · Nexus of Coexistence
        </footer>
      </blockquote>
    </Chamber>
  );
}

function Concept() {
  const pillars = [
    "Street Circles — hyperlocal community units",
    "Central Hub — advanced medical + public space",
    "A self-sustaining financial model",
  ];
  return (
    <Court>
      <Plate n="03" label="The Concept" />
      <h2 className="mt-12 max-w-4xl serif text-[40px] leading-[1.02] tracking-[-0.03em] md:mt-16 md:text-[84px] md:leading-[0.96]">
        Not a shelter.
        <br />
        A <span className="italic text-accent">living ecosystem.</span>
      </h2>
      <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-16">
        <p className="max-w-2xl text-[15px] leading-[2] text-muted-foreground md:col-span-7 md:text-[17px]">
          Mohalle Mastane is a dual-layered movement: a decentralised network of community care
          units across every neighbourhood, anchored by a central hub that blends veterinary care,
          public spaces, art, education, and healing — all in coexistence. It is a new typology. A
          temple of Karuna.
        </p>
        <ul className="md:col-span-5">
          {pillars.map((p, i) => (
            <li
              key={p}
              className="flex items-baseline gap-6 border-b border-border py-5 first:border-t"
            >
              <span className="plate">0{i + 1}</span>
              <span className="text-[15px] leading-[1.7] text-foreground/85 md:text-[16px]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Court>
  );
}

function System() {
  const steps = [
    { title: "Street Circles — community first response", body: "Trained local volunteers in every neighbourhood provide first-response care, feeding, monitoring, and quick emergency access. No overcrowding. Community-owned responsibility." },
    { title: "Central Hub — advanced treatment & community space", body: "City-scale facility with OPD, OT, ICU, isolation wards, species-specific rehabilitation, and a vibrant public zone — café, exhibition, eco-market, workshops — all under one roof." },
    { title: "Sustainable revenue — community funds compassion", body: "Vegan café, art exhibitions, eco-market brands, certified wellness programs, and donations generate a self-sustaining financial ecosystem — no dependency, no compromise." },
    { title: "Legal & civic integration", body: "Aligned with PCA Act 1960, ABC Rules 2023, AWBI Guidelines, and Article 51A(g) of the Constitution. A registered charitable trust. Accountable to the city, by the city." },
  ];
  const inside = [
    { title: "Veterinary Hospital", body: "OPD, OT, ICU, X-ray lab, isolation wards for rabies & distemper, post-operative recovery, species-specific enclosures.", tag: "Private" },
    { title: "Rescue & Emergency", body: "24/7 mobile rescue units, emergency response, surgery & advanced care coordination with municipal bodies.", tag: "Private" },
    { title: "Rescuer Accommodation", body: "Safe, dignified housing for local rescuers, veterinarians, and care staff — integrated into the space.", tag: "Private" },
    { title: "Vegan Café", body: "Conscious food, warm community interaction, contribution to rescue efforts — an inviting space where every meal matters.", tag: "Public" },
    { title: "Art & Exhibition Studio", body: "Animal narratives, coexistence art, local installations. A space where empathy is the medium and awareness is the message.", tag: "Public" },
    { title: "Eco-Market + Workshops", body: "Sustainable, animal-friendly brands; healing programs; community workshops and satsang-style gatherings for shared purpose.", tag: "Public" },
  ];
  return (
    <Court>
      <Title n="04" label="The System">
        How it <span className="italic text-accent">works.</span>
      </Title>
      <div className="mt-12">
        <StepFlow
          label="Four moving parts — swipe →"
          steps={steps.map((s, i) => ({
            n: `0${i + 1}`,
            title: s.title.split("—")[0]!.trim(),
            body: s.body,
            icon: [Users, Building2, Coins, Scale][i] ?? Users,
          }))}
        />
      </div>

      <h3 className="mt-24 serif text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[46px]">
        What lives <span className="italic text-accent">inside.</span>
      </h3>
      <div className="mt-12">
        <Rail label="Inside the hub →">
          {inside.map((it, i) => (
            <RailItem key={it.title}>
              <Reveal delay={i * 70}>
                <article className="group flex h-full min-h-[280px] flex-col border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/70 md:p-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="plate">{it.tag}</span>
                    <span className="serif italic text-[15px] text-accent">0{i + 1}</span>
                  </div>
                  <h4 className="mt-6 serif text-[22px] font-bold tracking-[-0.01em] md:text-[26px]">
                    {it.title}
                  </h4>
                  <p className="mt-4 text-[13px] leading-[1.9] text-muted-foreground">{it.body}</p>
                </article>
              </Reveal>
            </RailItem>
          ))}
        </Rail>
      </div>
    </Court>
  );
}


function HumanImpact() {
  const stats = [
    { n: "30+", label: "Animals per rescuer home" },
    { n: "100+", label: "Daily cases, one facility" },
    { n: "0", label: "Isolation wards in the city" },
  ];
  return (
    <Chamber>
      <Title n="05" label="Human Impact">
        Care is not a job.
        <br />
        It is a <span className="italic text-accent">way of life.</span>
      </Title>
      <blockquote className="max-w-3xl border-l border-accent pl-8">
        <Quiet>
          "No one is born a rescuer. It comes from a place of deep empathy — a natural calling that
          reminds us that care is not a job, but a way of life we share with every living being."
        </Quiet>
      </blockquote>
      <div className="mt-20 grid border-t border-background/12 md:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`${i !== 0 ? "border-t border-background/12 md:border-l md:border-t-0 md:pl-12" : ""} ${
              i !== 2 ? "md:pr-12" : ""
            }`}
          >
            <Figure n={s.n} label={s.label} />
          </div>
        ))}
      </div>
    </Chamber>
  );
}

function Opportunity() {
  const bars = [
    { label: "India's stray animal population", value: "80M+", pct: 95 },
    { label: "Cities without proper shelters", value: "88%", pct: 88 },
    { label: "Citizens willing to support locally", value: "72%", pct: 72 },
  ];
  return (
    <Court>
      <Title n="06" label="The Opportunity" lead="Our city is a prototype. With 640+ districts in India lacking proper animal welfare infrastructure, this community-driven, self-sustaining model can be deployed city by city — a franchise of compassion, not profit.">
        A replicable model
        <br />
        <span className="italic text-accent">for every city.</span>
      </Title>
      <div>
        {bars.map((b) => (
          <div key={b.label} className="border-b border-border py-8 md:py-10">
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-[14px] text-foreground/80 md:text-[16px]">{b.label}</span>
              <span className="serif text-[28px] leading-none text-accent md:text-[40px]">
                {b.value}
              </span>
            </div>
            <div className="mt-5 h-px w-full bg-border">
              <div className="h-px bg-accent" style={{ width: `${b.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Court>
  );
}

function Roadmap() {
  const phases = [
    {
      phase: "The Present",
      title: "Standing with the rescuers",
      body: "Right now, we support rescuers across different neighbourhoods and help the animals they care for — through feeding, rescue, surgeries, advanced care, foster, medication, and overall day-to-day care.",
    },
    {
      phase: "The Future",
      title: "A home for coexistence",
      body: "Ahead lies a dedicated clinic, a shelter, and the wider amenities a community needs to run smoothly — a permanent ground for compassion to live on.",
    },
  ];
  return (
    <Court>
      <Title n="07" label="Now & Next">
        From one neighbourhood
        <br />
        <span className="italic text-accent">to a nation.</span>
      </Title>
      <div className="grid md:grid-cols-2">
        {phases.map((p, i) => (
          <article
            key={p.phase}
            className={`border-t border-border py-10 md:py-16 ${
              i === 1 ? "md:border-l md:border-border md:pl-14" : "md:pr-14"
            }`}
          >
            <div className="plate">{p.phase}</div>
            <h3 className="mt-6 serif text-[24px] tracking-[-0.01em] md:text-[32px]">{p.title}</h3>
            <p className="mt-6 max-w-md text-[14px] leading-[2] text-muted-foreground md:text-[15px]">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </Court>
  );
}

/* ── 08 · Donate ──────────────────────────────────────────── */
function Donate() {
  const allocations = [
    { label: "Rescue & Emergency Response", pct: 40 },
    { label: "Veterinary Treatment & Medicine", pct: 30 },
    { label: "Shelter, Food & Daily Care", pct: 20 },
    { label: "Community & Awareness Programs", pct: 10 },
  ];
  const tiers = [
    { name: "Supporter", amount: "₹100", body: "Feeds a stray animal for one week. A simple act with a real difference." },
    { name: "Care Giver", amount: "₹500", body: "Covers medicines and first aid for one injured animal in emergency care." },
    { name: "Healer", amount: "₹1,000", body: "Supports one emergency surgery or advanced diagnostic for an injured stray." },
    { name: "Guardian", amount: "₹2,500", body: "Sponsors a full month of care — food, shelter, and treatment — for one animal." },
  ];
  const uses = [
    { title: "Mobile Rescue Units", body: "Fuel, equipment, and operations for emergency animal rescue across the city's neighbourhoods." },
    { title: "Veterinary Care", body: "Surgeries, advanced diagnostics, medicines, post-operative care, and specialist treatment." },
    { title: "Daily Feeding & Shelter", body: "Regular food, clean water, and safe shelter for injured and recovering animals." },
    { title: "Community Programs", body: "Street Circles, volunteer training, awareness campaigns, and humane education." },
  ];
  const stories = [
    { place: "Sector 9", title: "Fractured & found", body: "A dog brought in with a fracture received a full month of dedicated care — and was later adopted by a loving family.", tag: "Adopted" },
    { place: "Old Town Colony", title: "The tetanus dog", body: "A stray found with tetanus recovered after nearly a month of treatment. The very family that had once refused to help ended up adopting him.", tag: "Adopted by the same family" },
    { place: "Riverside Colony", title: "Tetanus & community", body: "Another tetanus case — neighbours helped monitor, feed, and care. She survived because the neighbourhood chose to act.", tag: "Survived with community support" },
    { place: "Sector 14", title: "Heat stroke & pregnancy", body: "A pregnant dog collapsed in the heat. She received saline and emergency treatment at a critical moment.", tag: "Treated in time" },
    { place: "Near Madhuban Hotel", title: "Till the very end", body: "A dog with a serious brain injury was never left alone. A local lady provided round-the-clock care. He couldn't make it — but he did not suffer alone.", tag: "Never abandoned" },
    { place: "Riverside Colony", title: "Accident puppy", body: "A puppy met with an accident and was rushed to hospital. Seven days of treatment and she was back on her feet.", tag: "Fully recovered in 7 days" },
  ];
  const tumours = [
    { title: "Rani — stray queen", place: "City centre", body: "Rani's tumour was caught early. Chemotherapy at the right stage ensured it did not develop further.", tag: "Early-stage chemo · Successful" },
    { title: "Large tumour case", place: "Civil Township", body: "Oral medication was administered consistently for nearly two months. Patience, resources, and daily commitment made this possible.", tag: "Two months oral medication · Ongoing" },
    { title: "Many more cases", place: "Across the city", body: "Many such tumour cases across the city — each demanding timely diagnosis, the right medication, and months of consistent care.", tag: "Awaiting timely care & resources" },
  ];

  const [amount, setAmount] = useState("500");

  return (
    <Court id="donate">
      {/* Masthead */}
      <Plate n="08" label="Support the Movement" />
      <h2 className="mt-12 max-w-4xl serif text-[46px] leading-[1.0] tracking-[-0.035em] md:mt-16 md:text-[96px] md:leading-[0.94]">
        Give a life
        <br />
        <span className="italic text-accent">a chance.</span>
      </h2>
      <p className="mt-12 max-w-2xl border-t border-border pt-10 text-[15px] leading-[2] text-muted-foreground md:text-[17px]">
        Every rupee goes directly to rescuing, treating, and rehabilitating animals in the city —
        and to building the community that sustains this work. 100% towards animal welfare and
        community care.
      </p>

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_420px]">
        {/* Give panel — a dark slab set into the wall */}
        <div className="lg:order-2 lg:sticky lg:top-28">
          <ContributeBlock amount={amount} setAmount={setAmount} />
        </div>

        <div className="min-w-0 lg:order-1">
          {/* Allocation */}
          <div className="border-t border-border pt-10">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="serif text-[26px] tracking-[-0.01em] md:text-[38px]">
                Where every <span className="italic text-accent">rupee goes</span>
              </h3>
              <span className="plate shrink-0">Transparency</span>
            </div>
            <dl className="mt-10">
              {allocations.map((a, i) => (
                <div key={a.label} className="border-b border-border py-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="text-[13px] text-foreground/80 md:text-[15px]">
                      <span className="plate mr-4">0{i + 1}</span>
                      {a.label}
                    </span>
                    <span className="serif text-[24px] leading-none text-accent md:text-[32px]">
                      {a.pct}%
                    </span>
                  </div>
                  <div className="mt-4 h-px w-full bg-border">
                    <div className="h-px bg-accent" style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-2xl text-[12px] leading-[1.9] text-muted-foreground md:text-[13px]">
              Mohalle Mastane is a registered charitable trust. All funds are audited and used
              exclusively for animal welfare objectives.
            </p>
          </div>

          {/* What it funds */}
          <div className="mt-24 border-t border-border pt-10">
            <h3 className="serif text-[22px] tracking-[-0.01em] md:text-[30px]">
              What your giving funds
            </h3>
            <div className="mt-10 grid border-t border-border sm:grid-cols-2">
              {uses.map((u, i) => (
                <article
                  key={u.title}
                  className={`border-b border-border py-8 md:py-10 ${
                    i % 2 === 1 ? "sm:border-l sm:border-border sm:pl-10" : "sm:pr-10"
                  }`}
                >
                  <h4 className="serif text-[19px]">{u.title}</h4>
                  <p className="mt-4 text-[13px] leading-[1.9] text-muted-foreground">{u.body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Tiers */}
          <div className="mt-24 border-t border-border pt-10">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="serif text-[26px] tracking-[-0.01em] md:text-[38px]">
                Every amount <span className="italic text-accent">matters here</span>
              </h3>
              <span className="plate shrink-0">Choose Your Impact</span>
            </div>
            <div className="mt-10 border-t border-border">
              {tiers.map((t) => {
                const numeric = Number(t.amount.replace(/[^\d]/g, ""));
                const active = Number(amount) === numeric;
                return (
                  <button
                    key={t.name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setAmount(String(numeric));
                      document
                        .getElementById("contribute")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`group grid w-full grid-cols-1 items-baseline gap-3 border-b border-border py-7 text-left transition-colors sm:grid-cols-[8rem_1fr_auto] sm:gap-8 ${
                      active ? "bg-accent/8" : "hover:bg-foreground/[0.03]"
                    }`}
                  >
                    <span className="serif text-[32px] leading-none transition-colors group-hover:text-accent md:text-[40px]">
                      {t.amount}
                    </span>
                    <span className="min-w-0">
                      <span className="plate block">{t.name}</span>
                      <span className="mt-3 block text-[13px] leading-[1.9] text-muted-foreground">
                        {t.body}
                      </span>
                    </span>
                    <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.26em] text-accent">
                      Choose {t.amount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>


          {/* Stories */}
          <div className="mt-24 border-t border-border pt-10">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="serif text-[26px] tracking-[-0.01em] md:text-[40px]">
                Stories from the <span className="italic text-accent">neighbourhood</span>
              </h3>
              <span className="plate shrink-0">Why It Matters</span>
            </div>
            <p className="mt-8 max-w-2xl text-[14px] leading-[2] text-muted-foreground md:text-[16px]">
              These are not statistics. These are real animals, real streets, real people — from the
              city's own neighbourhoods. Every case below was handled with the resources we had.
              Imagine what we could do with more.
            </p>
            <div className="mt-12 border-t border-border">
              {stories.map((s, i) => (
                <Row
                  key={s.title + s.place}
                  index={String(i + 1).padStart(2, "0")}
                  head={
                    <>
                      <span className="plate mb-3 block">{s.place}</span>
                      {s.title}
                    </>
                  }
                  body={s.body}
                  aside={s.tag}
                />
              ))}
            </div>
          </div>

          {/* Tumour cases */}
          <div className="mt-24 border-t border-border pt-10">
            <h3 className="serif text-[24px] tracking-[-0.01em] md:text-[34px]">
              Tumour <span className="italic text-accent">cases</span>
            </h3>
            <p className="mt-6 max-w-2xl text-[14px] leading-[2] text-muted-foreground">
              Tumours are among the most demanding cases — requiring weeks or months of consistent
              medication, monitoring, and care. These are some of the ones we've fought for.
            </p>
            <div className="mt-10 border-t border-border">
              {tumours.map((t, i) => (
                <Row
                  key={t.title}
                  index={`0${i + 1}`}
                  head={
                    <>
                      <span className="plate mb-3 block">{t.place}</span>
                      {t.title}
                    </>
                  }
                  body={t.body}
                  aside={t.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Court>
  );
}

/* Surgeries & Advanced Care — the inverted volume. */
function SurgeriesAndAdvancedCare() {
  const careCosts = [
    { title: "One emergency surgery", amount: "≈ ₹3,000–8,000", body: "Covers fracture repair, wound surgery, or life-saving procedures under anaesthesia and post-op monitoring." },
    { title: "Advanced diagnostics", amount: "≈ ₹1,500–4,000", body: "Blood tests, X-rays, ultrasounds and specialist consultations to diagnose complex cases accurately." },
    { title: "Long-term recovery", amount: "≈ ₹500/day", body: "Medicines, dressing, physiotherapy and safe shelter until the animal is stable enough to return to the street." },
  ];
  return (
    <Chamber>
      <Plate n="09" label="Critical Need · Ongoing" />
      <h2 className="mt-12 max-w-4xl serif text-[38px] leading-[1.02] tracking-[-0.03em] md:mt-16 md:text-[80px] md:leading-[0.96]">
        Surgeries &
        <br />
        <span className="italic text-accent">advanced care.</span>
      </h2>
      <div className="mt-14 grid gap-10 border-t border-background/12 pt-10 md:grid-cols-12 md:gap-16">
        <p className="text-[15px] leading-[2] text-background/70 md:col-span-6 md:text-[17px]">
          Most injured strays do not survive because the right care arrives too late — or never at
          all. We are building a surgical and advanced care fund so that fractures, wounds,
          infections and critical illnesses can be treated quickly, fully and without compromise.
        </p>
        <ul className="md:col-span-6">
          {[
            "Emergency surgeries for fractures, wounds and life-threatening injuries",
            "Diagnostics and specialist consultations that local rescuers cannot afford alone",
            "Post-operative recovery, medicines and rehabilitation in a safe space",
            "Every contribution goes directly to veterinary costs and aftercare",
          ].map((p) => (
            <li
              key={p}
              className="flex gap-5 border-b border-background/10 py-4 text-[14px] leading-[1.8] text-background/80 first:border-t"
            >
              <span className="text-accent">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 grid border-t border-background/12 md:grid-cols-3">
        {careCosts.map((c, i) => (
          <article
            key={c.title}
            className={`border-b border-background/10 py-10 md:border-b-0 md:py-14 ${
              i !== 0 ? "md:border-l md:border-background/12 md:pl-12" : ""
            } ${i !== 2 ? "md:pr-12" : ""}`}
          >
            <h4 className="serif text-[20px]">{c.title}</h4>
            <div className="mt-4 serif text-[28px] text-accent md:text-[34px]">{c.amount}</div>
            <p className="mt-5 text-[13px] leading-[1.9] text-background/60">{c.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-14 flex flex-col gap-4 sm:flex-row">
        <a
          href={site.razorpayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-background hover:text-ink"
        >
          Support this fund
        </a>
        <a
          href={site.whatsappGroupUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border border-background/30 px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-background transition-colors hover:border-accent hover:text-accent"
        >
          Get medical updates on WhatsApp
        </a>
      </div>
    </Chamber>
  );
}

function Fundraise() {
  return (
    <Court tight>
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <h3 className="serif text-[30px] leading-[1.05] tracking-[-0.02em] md:text-[52px]">
            Want to <span className="italic text-accent">fundraise</span> with us?
          </h3>
          <p className="mt-8 max-w-xl text-[14px] leading-[2] text-muted-foreground md:text-[16px]">
            You don't have to give alone. Organise a collection in your neighbourhood, run a small
            campaign with friends, or simply share this page — every rupee your community raises is
            your community's act of care.
          </p>
        </div>
        <div className="md:col-span-6">
          {["Share this page", "Collect in your colony", "Host a small event"].map((label, i) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-border py-6 first:border-t"
            >
              <span className="plate">0{i + 1}</span>
              <span className="flex-1 text-[13px] uppercase tracking-[0.18em] text-foreground/80 md:text-[15px]">
                {label}
              </span>
              <span className="text-accent">—</span>
            </div>
          ))}
        </div>
      </div>
    </Court>
  );
}

function Closing() {
  return (
    <Chamber id="join">
      <div className="mx-auto max-w-3xl text-center">
        <div className="plate">A Call to Coexistence</div>
        <h2 className="mt-12 serif text-[44px] leading-[1.0] tracking-[-0.03em] text-background md:text-[88px] md:leading-[0.96]">
          Let every <span className="italic text-accent">neighbourhood</span> heal.
        </h2>
        <p className="mt-10 text-[15px] leading-[2] text-background/65 md:text-[18px]">
          Build spaces. Build consciousness. Build a kinder city.
        </p>
        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={site.whatsappGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-accent px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-background"
          >
            Join the Movement
          </a>
          <a
            href={site.razorpayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-accent px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-accent transition-colors hover:bg-accent hover:text-ink"
          >
            Donate
          </a>
        </div>
      </div>
    </Chamber>
  );
}

function FooterMini() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12 text-center md:px-12">
      <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        © {new Date().getFullYear()} Mohalle Mastane Trust · Coexistence · Compassion · Togetherness
      </div>
    </footer>
  );
}

function FundraisingPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Nav />
      <Hero />
      <Gap />
      <Concept />
      <System />
      <HumanImpact />
      <Opportunity />
      <Roadmap />
      <Donate />
      <SurgeriesAndAdvancedCare />
      <Fundraise />
      <Closing />
      <FooterMini />
    </main>
  );
}

function ContributeBlock({
  amount,
  setAmount,
}: {
  amount: string;
  setAmount: (v: string) => void;
}) {
  const numeric = Number(amount) || 0;
  const presets = [100, 500, 1000, 2500, 5000, 10000];
  return (
    <div id="contribute" className="on-dark water-temple relative min-w-0 scroll-mt-24 text-background">
      <div className="relative z-[1] p-7 sm:p-9">
        <div className="flex items-baseline justify-between gap-4 border-b border-background/15 pb-5">
          <span className="plate">Make your contribution</span>
          <span className="text-[10px] uppercase tracking-[0.24em] text-background/40">Razorpay</span>
        </div>
        <h3 className="mt-8 serif text-[26px] leading-[1.15] md:text-[32px]">
          Donate <span className="italic text-accent">securely</span>
        </h3>
        <p className="mt-4 text-[13px] leading-[1.9] text-background/60">
          Pay by UPI, card, net banking or wallet on the Trust's official Razorpay page.
        </p>

        <div className="mt-9">
          <label htmlFor="donate-amount" className="plate">
            Choose an amount (INR)
          </label>
          <div className="mt-3 flex items-center border-b border-background/25 transition-colors focus-within:border-accent">
            <span className="serif pr-3 text-[30px] text-accent" aria-hidden="true">
              ₹
            </span>
            <input
              id="donate-amount"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, "").slice(0, 7))}
              placeholder="500"
              className="w-full min-w-0 flex-1 bg-transparent py-2 serif text-[30px] text-background outline-none placeholder:text-background/25"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-background/15">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={Number(amount) === p}
              onClick={() => setAmount(String(p))}
              className={`min-h-11 py-3 text-[12px] tracking-[0.1em] transition-colors ${
                Number(amount) === p
                  ? "bg-accent text-ink"
                  : "bg-ink/70 text-background/70 hover:text-accent"
              }`}
            >
              ₹{p.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        <a
          href={site.razorpayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-accent px-6 py-4 text-center text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-background"
        >
          {numeric > 0 ? `Donate ₹${numeric.toLocaleString("en-IN")} on Razorpay` : "Donate on Razorpay"}
        </a>

        <ol className="mt-6 space-y-2 text-[12px] leading-[1.8] text-background/55">
          <li>1. Razorpay opens in a new tab.</li>
          <li>
            2. Enter{" "}
            {numeric > 0 ? (
              <span className="text-accent">₹{numeric.toLocaleString("en-IN")}</span>
            ) : (
              "your amount"
            )}{" "}
            and your details, then pay.
          </li>
          <li>
            3. Razorpay handles payment status and confirmation. This website does not verify
            payments.
          </li>
        </ol>

        <p className="mt-8 text-center serif italic text-[15px] text-accent">
          From every creature we save — thank you.
        </p>
      </div>
    </div>
  );
}
