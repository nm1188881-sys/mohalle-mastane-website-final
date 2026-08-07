import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { Sprig } from "@/components/Sprig";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FundraisingPage,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-foreground/85 backdrop-blur-md border-b border-background/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Mohalle Mastane" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="serif text-[15px] md:text-[17px] tracking-[0.18em] uppercase text-background">
              Mohalle Mastane
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-background/55">
              Nexus of Coexistence
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#donate"
            className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-accent text-foreground text-[10px] md:text-[11px] uppercase tracking-[0.26em] hover:bg-background transition-colors"
          >
            Donate
          </a>
          <SiteMenu active="Fundraising" tone="dark" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="light-shaft-dark relative min-h-[88svh] flex items-end px-5 md:px-12 pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-background/8" />
      <div className="pointer-events-none absolute inset-y-0 left-[38%] w-px bg-background/8" />
      <div className="pointer-events-none absolute inset-x-0 top-[62%] h-px bg-background/8" />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="plate mb-10 md:mb-14">Fundraising — City Centre Mall</div>
        <h1 className="serif text-[44px] leading-[1.02] md:text-[96px] md:leading-[0.94] tracking-[-0.03em] text-background max-w-4xl">
          Every <span className="italic text-accent">Neighbourhood</span>
          <br />
          Has a Story
        </h1>
        <Sprig className="mt-10 md:mt-14 h-6 w-28 text-accent" />
        <p className="mt-8 max-w-md text-[14px] md:text-[15px] leading-[2] text-background/60">
          Building a world where compassion has an address — a nexus of care
          poured in concrete, light and daily patience.
        </p>
        <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-background/35">
          Scroll
        </div>
      </div>
    </section>
  );
}

function Reality() {
  const stats = [
    { n: "1,220", label: "Registered cruelty complaints in Odisha (2023–24)" },
    { n: "42.9%", label: "Cruelty rate among reported cases" },
    { n: "21.4%", label: "Survival rate for injured stray animals" },
  ];
  return (
    <section className="border-t border-background/10 py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">01 · The Reality on Our Streets</div>
        <h2 className="serif text-[36px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-background max-w-3xl">
          A City's Silent <span className="italic text-accent">Crisis</span>
        </h2>
        <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-[1.85] text-background/65">
          In the city today, a single government vet facility serves nearly <span className="text-background">100 cases per day</span> from a single hall — with no isolation wards, no diagnostic systems, no species-specific care. As development expands, animals are displaced, injured, and left without shelter or treatment. Local rescuers are sheltering 20–30 animals in their own homes. This cannot continue.
        </p>
        <div className="mt-16 grid md:grid-cols-3 border-t border-background/10">
          {stats.map((s, i) => (
            <div key={s.n} className={`py-10 ${i !== 0 ? "md:border-l border-background/10" : ""}`}>
              <div className="serif text-[48px] md:text-[64px] leading-none text-accent">{s.n}</div>
              <div className="mt-5 text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-background/55 max-w-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gap() {
  const items = [
    { title: "No Infrastructure", body: "No isolation wards. No operation theatres. No ICU. No species-specific enclosures. The current facility is overwhelmed and under-equipped." },
    { title: "Rescuers Alone", body: "Individual rescuers bear the entire burden. 20–30 animals in one home. No medical support, no funding, no system behind them." },
    { title: "Inaccessible Facilities", body: "Shelters on city outskirts can't serve emergencies. Rescue response time, volunteer coordination, and citizen help all depend on proximity." },
  ];
  return (
    <section className="border-t border-background/10 bg-background/[0.02] py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">02 · The Gap</div>
        <h2 className="serif text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-background max-w-3xl">
          Why existing solutions are <span className="italic text-accent">not enough</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <article key={it.title} className="p-8 border border-background/10 bg-ink/40">
              <div className="mb-6 h-px w-12 bg-accent/70" />
              <h3 className="serif text-[22px] md:text-[26px] text-background mb-4">{it.title}</h3>
              <p className="text-[14px] leading-[1.85] text-background/65">{it.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-20 max-w-3xl mx-auto text-center">
          <div className="mb-6 h-px w-16 bg-accent/60" />
          <p className="serif italic text-[20px] md:text-[28px] leading-[1.5] text-background/80">
            "The land is not merely valued for profit, nor are animals mere servants to man.
            Where action is rooted in dharma, divinity begins to awaken."
          </p>
          <footer className="mt-6 text-[11px] uppercase tracking-[0.28em] text-accent">
            — Mohalle Mastane · Nexus of Coexistence
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function Concept() {
  const pillars = [
    "Street Circles — Hyperlocal Community Units",
    "Central Hub — Advanced Medical + Public Space",
    "Self-Sustaining Financial Model",
  ];
  return (
    <section className="border-t border-background/10 py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">03 · The Concept</div>
        <h2 className="serif text-[40px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-background">
          Not a shelter.
          <br />
          A <span className="italic text-accent">living ecosystem.</span>
        </h2>
        <p className="mt-8 max-w-3xl text-[15px] md:text-[18px] leading-[1.85] text-background/65">
          Mohalle Mastane is a dual-layered movement: a decentralised network of community care units across every neighbourhood, anchored by a central hub that blends veterinary care, public spaces, art, education, and healing — all in coexistence. It is a new typology. A temple of Karuna.
        </p>
        <ul className="mt-12 space-y-4">
          {pillars.map((p, i) => (
            <li key={p} className="flex items-baseline gap-6 border-b border-background/10 pb-4">
              <span className="serif italic text-accent text-[14px]">0{i + 1}</span>
              <span className="text-[16px] md:text-[18px] text-background/85">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function System() {
  const steps = [
    { n: "01", title: "Street Circles — Community First Response", body: "Trained local volunteers in every neighbourhood provide first-response care, feeding, monitoring, and quick emergency access. No overcrowding. Community-owned responsibility." },
    { n: "02", title: "Central Hub — Advanced Treatment & Community Space", body: "City-scale facility with OPD, OT, ICU, isolation wards, species-specific rehabilitation, and a vibrant public zone — café, exhibition, eco-market, workshops — all under one roof." },
    { n: "03", title: "Sustainable Revenue — Community Funds Compassion", body: "Vegan café, art exhibitions, eco-market brands, certified wellness programs, and donations generate a self-sustaining financial ecosystem — no dependency, no compromise." },
    { n: "04", title: "Legal & Civic Integration", body: "Aligned with PCA Act 1960, ABC Rules 2023, AWBI Guidelines, and Article 51A(g) of the Constitution. A registered charitable trust. Accountable to the city, by the city." },
  ];
  const inside = [
    { title: "Veterinary Hospital", body: "OPD, OT, ICU, X-ray lab, isolation wards for rabies & distemper, post-operative recovery, species-specific enclosures.", tag: "Private" },
    { title: "Rescue & Emergency", body: "24/7 mobile rescue units, emergency response, sterilization drives, coordination with municipal bodies.", tag: "Private" },
    { title: "Rescuer Accommodation", body: "Safe, dignified housing for local rescuers, veterinarians, and care staff — integrated into the space.", tag: "Private" },
    { title: "Vegan Café", body: "Conscious food, warm community interaction, contribution to rescue efforts — an inviting space where every meal matters.", tag: "Public" },
    { title: "Art & Exhibition Studio", body: "Animal narratives, coexistence art, local installations. A space where empathy is the medium and awareness is the message.", tag: "Public" },
    { title: "Eco-Market + Workshops", body: "Sustainable, animal-friendly brands; healing programs; community workshops and satsang-style gatherings for shared purpose.", tag: "Public" },
  ];
  return (
    <section className="border-t border-background/10 bg-background/[0.02] py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">04 · The System</div>
        <h2 className="serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-background">
          How it <span className="italic text-accent">Works</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <article key={s.n} className="p-8 border border-background/10 bg-ink/40">
              <div className="serif italic text-accent text-[14px] tracking-[0.2em]">{s.n}</div>
              <h3 className="serif text-[20px] md:text-[24px] text-background mt-3">{s.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.85] text-background/65">{s.body}</p>
            </article>
          ))}
        </div>
        <h3 className="serif text-[28px] md:text-[40px] text-background mt-24 mb-10">
          What lives <span className="italic text-accent">inside</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {inside.map((it) => (
            <article key={it.title} className="p-7 border border-background/10 bg-ink/40">
              <div className="flex items-start justify-between mb-4">
                <div className="h-px w-12 bg-accent/70" />
                <span className={`text-[9px] uppercase tracking-[0.26em] px-2 py-1 border ${it.tag === "Public" ? "border-accent/60 text-accent" : "border-background/25 text-background/55"}`}>{it.tag}</span>
              </div>
              <h4 className="serif text-[19px] text-background">{it.title}</h4>
              <p className="mt-3 text-[13px] leading-[1.8] text-background/65">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HumanImpact() {
  const stats = [
    { n: "30+", label: "Animals per rescuer home" },
    { n: "100+", label: "Daily cases, one facility" },
    { n: "0", label: "Isolation wards in the city" },
  ];
  return (
    <section className="border-t border-background/10 py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">05 · Human Impact</div>
        <h2 className="serif text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-background max-w-3xl">
          Care is not a job. It is a <span className="italic text-accent">way of life.</span>
        </h2>
        <blockquote className="mt-10 max-w-3xl serif italic text-[18px] md:text-[22px] leading-[1.6] text-background/80 border-l-2 border-accent pl-6">
          "No one is born a rescuer. It comes from a place of deep empathy — a natural calling that reminds us that care is not a job, but a way of life we share with every living being."
        </blockquote>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-background/10">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-10 ${i !== 0 ? "md:border-l border-background/10 border-t md:border-t-0" : ""}`}>
              <div className="serif text-[56px] md:text-[72px] leading-none text-accent">{s.n}</div>
              <div className="mt-4 text-[12px] uppercase tracking-[0.18em] text-background/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  const bars = [
    { label: "India's stray animal population", value: "80M+", pct: 95 },
    { label: "Cities without proper shelters", value: "88%", pct: 88 },
    { label: "Citizens willing to support locally", value: "72%", pct: 72 },
  ];
  return (
    <section className="border-t border-background/10 bg-background/[0.02] py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">06 · The Opportunity</div>
        <h2 className="serif text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-background max-w-3xl">
          A replicable model <span className="italic text-accent">for every city</span>
        </h2>
        <p className="mt-8 max-w-3xl text-[15px] md:text-[17px] leading-[1.85] text-background/65">
          Our city is a prototype. With 640+ districts in India lacking proper animal welfare infrastructure, Mohalle Mastane's community-driven, self-sustaining model can be deployed city by city — a franchise of compassion, not profit.
        </p>
        <div className="mt-12 space-y-7 max-w-3xl">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[13px] md:text-[14px] text-background/75">{b.label}</span>
                <span className="serif text-[22px] md:text-[28px] text-accent">{b.value}</span>
              </div>
              <div className="h-[3px] bg-background/10">
                <div className="h-full bg-accent" style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {
      phase: "The Present",
      title: "Standing with the rescuers",
      body: "Right now, we support rescuers across different neighbourhoods and help the animals they care for — through feeding, rescue, sterilisation, foster, medication, and overall day-to-day care.",
    },
    {
      phase: "The Future",
      title: "A home for coexistence",
      body: "Ahead lies a dedicated clinic, a shelter, and the wider amenities a community needs to run smoothly — a permanent ground for compassion to live on.",
    },
  ];
  return (
    <section className="border-t border-background/10 py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="plate text-accent mb-8">07 · Now & Next</div>
        <h2 className="serif text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-background max-w-3xl">
          From one neighbourhood <span className="italic text-accent">to a nation</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {phases.map((p) => (
            <article key={p.phase} className="p-8 md:p-10 border border-background/10 bg-ink/40">
              <div className="mb-6 h-px w-12 bg-accent/70" />
              <div className="text-[10px] uppercase tracking-[0.28em] text-accent">{p.phase}</div>
              <h3 className="serif text-[22px] md:text-[26px] text-background mt-3">{p.title}</h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.85] text-background/65">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    { name: "Healer", amount: "₹1,000", body: "Supports one full surgical sterilisation — breaking the cycle for generations of strays." },
    { name: "Guardian", amount: "₹2,500", body: "Sponsors a full month of care — food, shelter, and treatment — for one animal." },
  ];
  const uses = [
    { title: "Mobile Rescue Units", body: "Fuel, equipment, and operations for emergency animal rescue across the city's neighbourhoods." },
    { title: "Veterinary Care", body: "Surgeries, medicines, post-operative care, sterilisation drives, and specialist treatment." },
    { title: "Daily Feeding & Shelter", body: "Regular food, clean water, and safe shelter for injured and recovering animals." },
    { title: "Community Programs", body: "Street Circles, volunteer training, awareness campaigns, and humane education." },
  ];
  const stories = [
    { place: "Sector 9", title: "Fractured & Found", body: "A dog brought in with a fracture received a full month of dedicated care — and was later adopted by a loving family.", tag: "Adopted" },
    { place: "Old Town Colony", title: "The Tetanus Dog", body: "A stray found with tetanus recovered after nearly a month of treatment. The very family that had once refused to help ended up adopting him.", tag: "Adopted by the same family" },
    { place: "Riverside Colony", title: "Tetanus & Community", body: "Another tetanus case — neighbours helped monitor, feed, and care. She survived because the neighbourhood chose to act.", tag: "Survived with community support" },
    { place: "Sector 14", title: "Heat Stroke & Pregnancy", body: "A pregnant dog collapsed in the heat. She received saline and emergency treatment at a critical moment.", tag: "Treated in time" },
    { place: "Near Madhuban Hotel", title: "Till the Very End", body: "A dog with a serious brain injury was never left alone. A local lady provided round-the-clock care. He couldn't make it — but he did not suffer alone.", tag: "Never abandoned" },
    { place: "Riverside Colony", title: "Accident Puppy", body: "A puppy met with an accident and was rushed to hospital. Seven days of treatment and she was back on her feet.", tag: "Fully recovered in 7 days" },
  ];
  const tumours = [
    { title: "Rani — Stray Queen", place: "City centre", body: "Rani's tumour was caught early. Chemotherapy at the right stage ensured it did not develop further.", tag: "Early-stage chemo · Successful" },
    { title: "Large Tumour Case", place: "Civil Township", body: "Oral medication was administered consistently for nearly two months. Patience, resources, and daily commitment made this possible.", tag: "Two months oral medication · Ongoing" },
    { title: "Many More Cases", place: "Across the city", body: "Many such tumour cases across the city — each demanding timely diagnosis, the right medication, and months of consistent care.", tag: "Awaiting timely care & resources" },
  ];
  const steriCosts = [
    { title: "One Sterilisation", amount: "≈ ₹1,000", body: "Covers the full procedure, anaesthesia, and basic post-operative care for one animal." },
    { title: "Post-Op Care", amount: "≈ ₹300–500", body: "Medicines, wound dressing, and monitoring for the recovery period." },
    { title: "Transport & Logistics", amount: "Community effort", body: "Volunteer-coordinated pickup and drop — your neighbourhood can help here too." },
  ];

  const [amount, setAmount] = useState("500");
  const [showThanks, setShowThanks] = useState(false);




  return (
    <section id="donate" className="relative border-t border-background/10 overflow-hidden">
      {/* structural hairlines */}
      <div className="pointer-events-none absolute inset-y-0 left-[6%] w-px bg-background/[0.06]" />
      <div className="pointer-events-none absolute inset-y-0 right-[6%] w-px bg-background/[0.06]" />

      {/* ── Masthead ─────────────────────────────────────────── */}
      <div className="px-5 md:px-12 pt-20 md:pt-32 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-start gap-6 md:gap-10">
            <div className="serif text-[52px] md:text-[110px] leading-[0.8] text-accent/25 select-none">08</div>
            <div className="flex-1 min-w-0">
              <div className="plate text-accent mb-6">08 · Support the Movement</div>
              <h2 className="serif text-[44px] md:text-[92px] leading-[0.98] tracking-[-0.03em] text-background">
                Give a life <span className="italic text-accent">a chance.</span>
              </h2>
            </div>
          </div>
          <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-background/10 pt-8">
            <p className="max-w-3xl text-[15px] md:text-[18px] leading-[1.85] text-background/65">
              Every rupee goes directly to rescuing, treating, and rehabilitating animals in the city — and to building the community that sustains this work. 100% towards animal welfare and community care.
            </p>
            <Sprig className="hidden md:block w-24 h-24 text-accent/40 shrink-0" />
          </div>
        </div>
      </div>

      {/* ── Ledger + sticky give panel ───────────────────────── */}
      <div className="px-5 md:px-12 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-start">
          {/* Give panel — first on mobile, right rail on desktop */}
          <div className="lg:order-2 lg:sticky lg:top-24">
            <ContributeBlock amount={amount} setAmount={setAmount} onShowThanks={() => setShowThanks(true)} />
          </div>

          {/* Ledger column */}
          <div className="lg:order-1 min-w-0">
            {/* Allocation ledger */}
            <div className="border-t border-background/20 pt-8">
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="serif text-[26px] md:text-[38px] text-background">
                  Where every <span className="italic text-accent">rupee goes</span>
                </h3>
                <div className="eyebrow text-accent shrink-0">Transparency</div>
              </div>
              <dl className="mt-8">
                {allocations.map((a, i) => (
                  <div key={a.label} className="group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-4 border-b border-background/10 py-4">
                    <dt className="text-[10px] uppercase tracking-[0.24em] text-background/35">0{i + 1}</dt>
                    <div className="min-w-0">
                      <span className="text-[13px] md:text-[15px] text-background/80">{a.label}</span>
                      <div className="mt-2 h-px bg-background/10">
                        <div className="h-px bg-accent" style={{ width: `${a.pct}%` }} />
                      </div>
                    </div>
                    <dd className="serif text-[24px] md:text-[32px] text-accent leading-none">{a.pct}%</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[12px] md:text-[13px] text-background/50 max-w-2xl leading-[1.8]">
                Mohalle Mastane is a registered charitable trust. All funds are audited and used exclusively for animal welfare objectives.
              </p>
            </div>

            {/* What it funds */}
            <div className="mt-20 border-t border-background/20 pt-8">
              <h3 className="serif text-[22px] md:text-[30px] text-background mb-8">What your giving funds</h3>
              <div className="grid sm:grid-cols-2 gap-px bg-background/10 border border-background/10">
                {uses.map((u) => (
                  <article key={u.title} className="bg-ink/50 p-6 md:p-8">
                    <div className="mb-5 h-px w-10 bg-accent/70" />
                    <h4 className="serif text-[19px] text-background">{u.title}</h4>
                    <p className="mt-3 text-[13px] leading-[1.8] text-background/60">{u.body}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Tiers as ledger rows */}
            <div className="mt-20 border-t border-background/20 pt-8">
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="serif text-[26px] md:text-[38px] text-background">
                  Every amount <span className="italic text-accent">matters here</span>
                </h3>
                <div className="eyebrow text-accent shrink-0">Choose Your Impact</div>
              </div>
              <div className="mt-8">
                {tiers.map((t) => {
                  const numeric = Number(t.amount.replace(/[^\d]/g, ""));
                  const active = Number(amount) === numeric;
                  return (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => {
                        setAmount(String(numeric));
                        setShowThanks(true);
                        setTimeout(() => {
                          document.getElementById("thanks")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 50);
                      }}
                      className={`group w-full text-left border-b border-background/10 py-6 grid sm:grid-cols-[9rem_1fr_auto] gap-3 sm:gap-6 items-baseline transition-colors ${
                        active ? "bg-accent/10" : "hover:bg-background/[0.04]"
                      }`}
                    >
                      <div className="flex items-baseline gap-3 px-1">
                        <span className="serif text-[34px] md:text-[40px] leading-none text-background group-hover:text-accent transition-colors">
                          {t.amount}
                        </span>
                      </div>
                      <div className="px-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-accent">{t.name}</div>
                        <p className="mt-2 text-[13px] leading-[1.8] text-background/60">{t.body}</p>
                        <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-background/35">one time</div>
                      </div>
                      <span className="px-1 text-[10px] uppercase tracking-[0.26em] text-accent whitespace-nowrap">
                        Give {t.amount} →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {showThanks && <ThankYouSection amount={amount} setAmount={setAmount} onReset={() => setShowThanks(false)} />}

            {/* Stories — index list */}
            <div className="mt-20 border-t border-background/20 pt-8">
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="serif text-[26px] md:text-[40px] text-background">
                  Stories from the <span className="italic text-accent">neighbourhood</span>
                </h3>
                <div className="eyebrow text-accent shrink-0">Why It Matters</div>
              </div>
              <p className="mt-6 max-w-3xl text-[14px] md:text-[16px] leading-[1.85] text-background/65">
                These are not statistics. These are real animals, real streets, real people — from the city's own neighbourhoods. Every case below was handled with the resources we had. Imagine what we could do with more.
              </p>
              <div className="mt-10">
                {stories.map((s, i) => (
                  <article
                    key={s.title + s.place}
                    className="grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-6 border-b border-background/10 py-7"
                  >
                    <div className="serif text-[22px] text-accent/40 leading-none">{String(i + 1).padStart(2, "0")}</div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-accent">{s.place}</div>
                      <h4 className="serif text-[22px] md:text-[26px] text-background mt-2">{s.title}</h4>
                      <p className="mt-3 max-w-2xl text-[13px] md:text-[14px] leading-[1.85] text-background/60">{s.body}</p>
                      <div className="mt-4 inline-block border border-background/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-background/55">
                        {s.tag}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Tumour cases */}
            <div className="mt-20 border-t border-background/20 pt-8">
              <h3 className="serif text-[24px] md:text-[34px] text-background">
                Tumour <span className="italic text-accent">Cases</span>
              </h3>
              <p className="mt-4 max-w-3xl text-[14px] leading-[1.85] text-background/65">
                Tumours are among the most demanding cases — requiring weeks or months of consistent medication, monitoring, and care. These are some of the ones we've fought for.
              </p>
              <div className="mt-8 grid gap-px bg-background/10 border border-background/10 sm:grid-cols-3">
                {tumours.map((t) => (
                  <article key={t.title} className="bg-ink/50 p-6 md:p-7 flex flex-col">
                    <div className="mb-5 h-px w-10 bg-accent/70" />
                    <h4 className="serif text-[19px] text-background">{t.title}</h4>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-accent mt-1">{t.place}</div>
                    <p className="mt-4 text-[13px] leading-[1.8] text-background/60 flex-1">{t.body}</p>
                    <div className="mt-5 text-[10px] uppercase tracking-[0.2em] text-background/50">{t.tag}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sterilisation campaign — full-bleed inversion ────── */}
      <div className="relative border-y border-accent/30 bg-background text-foreground px-5 md:px-12 py-16 md:py-28">
        <Sprig className="pointer-events-none absolute right-6 top-8 w-24 md:w-40 h-auto text-accent/25" />
        <div className="mx-auto max-w-[1400px] relative">
          <div className="eyebrow text-accent mb-5">Upcoming Initiative · Date to be announced</div>
          <h3 className="serif text-[34px] md:text-[72px] leading-[1.0] tracking-[-0.02em] text-foreground max-w-4xl">
            Sterilisation <span className="italic text-accent">Campaign</span>
          </h3>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16 border-t border-foreground/15 pt-10">
            <p className="text-[15px] md:text-[17px] leading-[1.9] text-foreground/75">
              We are planning a dedicated sterilisation campaign — and we need your support to make it happen. This is not a blanket drive: it is specifically targeted at strays at high risk of developing painful diseases, infections, and complications that go untreated on the streets.
            </p>
            <ul className="space-y-0 text-[14px] text-foreground/80">
              {[
                "Prevents reproductive diseases and infections in vulnerable strays",
                "Reduces long-term suffering — not just population numbers",
                "Targeted only at animals identified as most in need",
                "Every rupee raised goes directly to procedure costs and post-op care",
              ].map((p) => (
                <li key={p} className="flex gap-4 border-b border-foreground/12 py-3">
                  <span className="text-accent">—</span>
                  <span className="leading-[1.75]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-foreground/12 border border-foreground/12">
            {steriCosts.map((c) => (
              <article key={c.title} className="bg-background p-6 md:p-8">
                <div className="mb-5 h-px w-10 bg-accent/70" />
                <h4 className="serif text-[19px] text-foreground">{c.title}</h4>
                <div className="serif text-[26px] text-accent mt-2">{c.amount}</div>
                <p className="mt-3 text-[13px] leading-[1.8] text-foreground/65">{c.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@streetkind.org?subject=Support the sterilisation campaign"
              className="inline-flex items-center justify-center px-7 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.26em] hover:bg-accent hover:text-foreground transition-colors"
            >
              Support this campaign →
            </a>
            <a
              href="mailto:hello@streetkind.org?subject=Notify me — sterilisation campaign"
              className="inline-flex items-center justify-center px-7 py-4 border border-foreground/30 text-foreground text-[11px] uppercase tracking-[0.26em] hover:border-accent hover:text-accent transition-colors"
            >
              Notify me when the date is set
            </a>
          </div>
        </div>
      </div>

      {/* ── Fundraise with us ────────────────────────────────── */}
      <div className="px-5 md:px-12 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="serif text-[30px] md:text-[54px] leading-[1.05] text-background">
              Want to <span className="italic text-accent">fundraise</span> with us?
            </h3>
            <p className="mt-6 max-w-xl text-[14px] md:text-[16px] leading-[1.85] text-background/65">
              You don't have to give alone. Organise a collection in your neighbourhood, run a small campaign with friends, or simply share this page — every rupee your community raises is your community's act of care.
            </p>
          </div>
          <div className="border-t border-background/20">
            {["Share this page", "Collect in your colony", "Host a small event"].map((label, i) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-6 border-b border-background/10 py-6 text-background/75"
              >
                <span className="text-[10px] uppercase tracking-[0.24em] text-background/35">0{i + 1}</span>
                <span className="flex-1 text-[13px] md:text-[15px] uppercase tracking-[0.18em]">{label}</span>
                <span className="text-accent">—</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Closing() {

  return (
    <section id="join" className="border-t border-background/10 py-24 md:py-40 px-5 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,120,60,0.15),_transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="plate text-accent mb-8">08 · A Call to Coexistence</div>
        <h2 className="serif text-[48px] md:text-[88px] leading-[1.02] tracking-[-0.02em] text-background">
          Let every <span className="italic text-accent">neighbourhood</span> heal.
        </h2>
        <p className="mt-8 text-[16px] md:text-[19px] text-background/65">
          Build spaces. Build consciousness. Build a kinder city.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 bg-accent text-foreground text-[11px] uppercase tracking-[0.28em] hover:bg-background transition-colors"
          >
            Join the Movement
          </a>
          <a
            href="mailto:hello@streetkind.org?subject=I want to donate"
            className="inline-flex items-center justify-center px-9 py-4 border border-accent text-accent text-[11px] uppercase tracking-[0.28em] hover:bg-accent hover:text-ink transition-colors"
          >
            Donate
          </a>
        </div>
        <div className="mt-12 text-[12px] uppercase tracking-[0.32em] text-background/40">
          @streetkind
        </div>
      </div>
    </section>
  );
}

function FooterMini() {
  return (
    <footer className="border-t border-background/10 py-10 px-5 md:px-12 text-center">
      <div className="text-[10px] uppercase tracking-[0.32em] text-background/40">
        © {new Date().getFullYear()} Mohalle Mastane Trust · Coexistence · Compassion · Togetherness
      </div>
    </footer>
  );
}

function FundraisingPage() {
  return (
    <main className="on-dark concrete-dark text-background min-h-dvh">
      <Nav />
      <Hero />
      <Reality />
      <Gap />
      <Concept />
      <System />
      <HumanImpact />
      <Opportunity />
      <Roadmap />
      <Donate />
      <Closing />

      <FooterMini />
    </main>
  );
}
function ContributeBlock({ amount, setAmount, onShowThanks }: { amount: string; setAmount: (v: string) => void; onShowThanks: () => void }) {
  const UPI_ID = "streetkind@upi";
  const PAYEE_NAME = "Mohalle Mastane";
  const [copied, setCopied] = useState(false);

  const numeric = Number(amount) || 0;
  const upiParams = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    cu: "INR",
    tn: "Donation to Mohalle Mastane",
  });
  if (numeric > 0) upiParams.set("am", String(numeric));
  const upiUrl = `upi://pay?${upiParams.toString()}`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=2&data=${encodeURIComponent(upiUrl)}`;

  const presets = [100, 500, 1000, 2500, 5000];

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div id="contribute" className="min-w-0 border border-accent/40 bg-ink/60 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,120,60,0.14),_transparent_70%)]" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4 border-b border-background/15 pb-4">
          <div className="eyebrow text-accent">Make Your Contribution</div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-background/35">Secure · UPI</div>
        </div>
        <h3 className="serif text-[26px] md:text-[32px] leading-[1.1] text-background mt-6">Donate directly via UPI</h3>
        <p className="mt-3 text-[13px] leading-[1.8] text-background/60">
          Enter any amount and pay from any UPI app — GPay, PhonePe, Paytm, BHIM, or your bank app.
        </p>

        {/* Amount input */}
        <label className="block mt-7">
          <span className="text-[10px] uppercase tracking-[0.28em] text-background/55">Amount (INR)</span>
          <div className="mt-2 flex items-center border-b-2 border-background/25 focus-within:border-accent transition-colors">
            <span className="serif text-[30px] text-accent pr-3">₹</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="500"
              className="w-full min-w-0 flex-1 bg-transparent py-2 serif text-[30px] text-background outline-none placeholder:text-background/25"
            />
          </div>
        </label>

        <div className="mt-4 grid grid-cols-3 gap-px bg-background/15 border border-background/15">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              className={`py-3 text-[11px] tracking-[0.14em] transition-colors ${
                Number(amount) === p
                  ? "bg-accent text-foreground"
                  : "bg-ink/60 text-background/70 hover:text-accent"
              }`}
            >
              ₹{p.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        {/* Primary pay button — opens UPI intent on mobile */}
        <a
          href={upiUrl}
          className={`mt-6 inline-flex w-full items-center justify-center px-6 py-4 text-[12px] uppercase tracking-[0.26em] transition-colors ${
            numeric > 0
              ? "bg-accent text-foreground hover:bg-background"
              : "bg-background/10 text-background/40 pointer-events-none"
          }`}
        >
          Pay ₹{numeric > 0 ? numeric.toLocaleString("en-IN") : "—"} via UPI →
        </a>
        <p className="mt-3 text-[11px] text-background/45 leading-[1.7]">
          On mobile, this opens your UPI app with the amount pre-filled. On desktop, scan the QR on the right.
        </p>

        {/* QR */}
        <div className="mt-7 border-t border-background/15 pt-7">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h4 className="serif text-[19px] text-background">
              Scan with any <span className="italic text-accent">UPI app</span>
            </h4>
            <div className="eyebrow text-accent shrink-0">Scan to Pay</div>
          </div>
          <div className="flex justify-center">
            <div className="bg-background p-3">
              <img
                src={qrSrc}
                alt={`UPI QR code to pay ₹${numeric} to ${PAYEE_NAME}`}
                width={260}
                height={260}
                className="block h-auto w-full max-w-[200px]"
              />
            </div>
          </div>
          <p className="mt-5 text-[12px] text-background/55 text-center leading-[1.8]">
            QR updates with the amount you enter. All contributions are received by the Trust and acknowledged.
          </p>
        </div>

        {/* UPI ID copy */}
        <div className="mt-7 border border-background/15 p-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.28em] text-background/55">UPI ID</div>
            <div className="serif text-[18px] text-accent mt-1 break-all">{UPI_ID}</div>
          </div>
          <button
            type="button"
            onClick={copyId}
            className="shrink-0 px-4 py-2 border border-accent text-accent text-[10px] uppercase tracking-[0.22em] hover:bg-accent hover:text-ink transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <a
          href={`mailto:hello@streetkind.org?subject=I've made my donation&body=I have contributed ₹${numeric || ""} via UPI to ${UPI_ID}.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ATransaction ID:`}
          className="mt-4 inline-flex w-full text-center items-center justify-center px-5 py-3 border border-background/25 text-background text-[11px] uppercase tracking-[0.26em] hover:border-accent hover:text-accent transition-colors"
        >
          I've made my donation — send details →
        </a>

        <p className="mt-6 serif italic text-[15px] text-accent text-center">
          From every creature we save — thank you.
        </p>
      </div>
    </div>
  );
}


function ThankYouSection({ amount, setAmount, onReset }: { amount: string; setAmount: (v: string) => void; onReset: () => void }) {
  const numeric = Number(amount) || 0;
  const waText = encodeURIComponent(
    `Hi Mohalle Mastane team — I've just donated ₹${numeric} via UPI. Sharing my payment screenshot for your records.`
  );
  const mailBody = encodeURIComponent(
    `Hi,\n\nI have contributed ₹${numeric} via UPI to streetkind@upi.\n\nName:\nPhone:\nTransaction ID:\n(Screenshot attached)\n\nThank you.`
  );

  return (
    <div id="thanks" className="mt-24 border border-accent/40 bg-ink/40 p-8 md:p-12">
      <div className="eyebrow text-accent">A heartfelt thank you</div>
      <h3 className="serif text-[28px] md:text-[40px] text-background mt-3 leading-[1.15]">
        From every neighbourhood, every paw — <span className="italic text-accent">thank you</span>.
      </h3>
      {numeric > 0 && (
        <p className="mt-4 serif text-[18px] md:text-[20px] text-background/80">
          Your intended contribution: <span className="text-accent">₹{numeric.toLocaleString("en-IN")}</span>
        </p>
      )}

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { n: "01", t: "Complete payment", d: "If you haven't already, tap Pay via UPI below or scan the QR from your phone." },
          { n: "02", t: "Take a screenshot", d: "Capture the payment success screen from your UPI app — it's your receipt." },
          { n: "03", t: "Share the proof", d: "Send it via WhatsApp or email so we can acknowledge it and issue a receipt." },
        ].map((s) => (
          <div key={s.n} className="border border-background/15 p-6">
            <div className="serif text-accent text-[22px]">{s.n}</div>
            <div className="mt-2 text-background text-[15px]">{s.t}</div>
            <div className="mt-2 text-background/60 text-[13px] leading-[1.75]">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 bg-accent text-foreground text-[11px] uppercase tracking-[0.26em] hover:bg-background transition-colors"
        >
          Share proof on WhatsApp →
        </a>
        <a
          href={`mailto:hello@streetkind.org?subject=Donation%20proof%20-%20%E2%82%B9${numeric}&body=${mailBody}`}
          className="inline-flex items-center px-6 py-3 border border-background/25 text-background text-[11px] uppercase tracking-[0.26em] hover:border-accent hover:text-accent transition-colors"
        >
          Email payment proof →
        </a>
        <button
          type="button"
          onClick={() => { setAmount("500"); onReset(); }}
          className="inline-flex items-center px-6 py-3 border border-background/15 text-background/70 text-[11px] uppercase tracking-[0.26em] hover:border-accent hover:text-accent transition-colors"
        >
          Make another donation
        </button>
      </div>
    </div>
  );
}

