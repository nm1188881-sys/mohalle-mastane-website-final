import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { SiteMenu } from "@/components/SiteMenu";
import { Sprig } from "@/components/Sprig";
import boriBed from "@/assets/bori-bed.jpg.asset.json";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Volunteers — Mohalle Mastane" },
      {
        name: "description",
        content:
          "Join Mohalle Mastane as a volunteer or attend our community events — feeding drives, vaccination camps, awareness sessions and rescue trainings across the city.",
      },
      { property: "og:title", content: "Events & Volunteers — Mohalle Mastane" },
      {
        property: "og:description",
        content:
          "Become a feeder, rescuer or foster parent. Join upcoming drives, camps and awareness sessions with the Mohalle Mastane community.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
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
            Volunteer
          </a>
          <SiteMenu active="Events & Volunteers" />
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
        <div className="plate mb-10">01 — Events · Volunteers · Drives</div>
        <h1 className="serif text-[42px] leading-[1.05] md:text-[80px] md:leading-[0.98] tracking-[-0.02em] text-foreground max-w-4xl">
          Show up for a neighbourhood.
          <br />
          <span className="italic text-accent">Change a street forever.</span>
        </h1>
        <Sprig className="mt-8 h-6 w-28 text-accent" />
        <p className="mt-8 max-w-2xl text-[15px] md:text-[18px] leading-[2] text-muted-foreground">
          Every event we run is a chance for a neighbour to become a rescuer. Feeding
          rounds, vaccination camps, sterilisation drives, awareness walks and
          weekend trainings — all powered by people from the lanes they serve.
        </p>
      </div>
    </section>
  );
}

const events = [
  {
    when: "Every Sunday",
    time: "7:00 AM",
    title: "Neighbourhood Feeding Round",
    where: "Sectors 2, 5 & 7",
    body: "Join the weekly feeding loop. Walk a lane, feed the regulars, log new faces. Best entry point for first-time volunteers.",
    tag: "Recurring",
  },
  {
    when: "Last Saturday, monthly",
    time: "10:00 AM – 4:00 PM",
    title: "Free Vaccination & Health Camp",
    where: "Venue announced on WhatsApp",
    body: "Anti-rabies shots, deworming and basic checkups for street and community dogs. Volunteers needed for crowd handling and logging.",
    tag: "Camp",
  },
  {
    when: "Rolling",
    time: "On call",
    title: "Sterilisation Drive (ABC)",
    where: "Across city neighbourhoods",
    body: "Catch–neuter–release in partnership with local vets — only for animals that require it. Volunteers help with safe handling, transport and post-op fostering.",
    tag: "Drive",
  },
  {
    when: "First Saturday, monthly",
    time: "5:00 PM",
    title: "Awareness Walk in Schools",
    where: "Local schools · citywide",
    body: "Short, gentle sessions with students on coexistence with street animals — bite safety, feeding etiquette, reporting cruelty.",
    tag: "Awareness",
  },
  {
    when: "Quarterly",
    time: "Half day",
    title: "Rescuer Training Workshop",
    where: "Mohalle Mastane base",
    body: "Hands-on basics of safe rescue: approach, restraint, first response, when to call a vet, when to call a foster.",
    tag: "Training",
  },
  {
    when: "Anytime",
    time: "Self-paced",
    title: "Foster a Healing Animal",
    where: "Your home",
    body: "Open your home for 1–4 weeks to a recovering animal. We provide food, medicines and a rescuer on call.",
    tag: "Foster",
  },
];

function Events() {
  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="plate mb-8">02 — Featured Campaign · Winter</div>
        <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          Be the reason
          <br />
          <span className="italic text-accent">they stay warm.</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch border border-border bg-card overflow-hidden">
          <div className="order-2 md:order-1 p-7 md:p-12 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.28em] text-accent mb-5">
              Bori Bed Drive · ₹40
            </span>
            <h3 className="serif text-[26px] md:text-[36px] leading-[1.15] text-foreground">
              Your ₹40 can bring warmth to a life.
            </h3>
            <p className="mt-6 text-[15px] leading-[1.85] text-muted-foreground">
              This winter, we won't let our stray companions feel the cold. Our
              team has started a small initiative to help them stay warm by
              making <em>bori beds</em> with the help of our volunteers — simple
              beds that make a big difference on harsh winter nights.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              Support this kind initiative by donating a small amount and
              sponsoring a bori bed for just <strong>₹40</strong>. Please tie
              the bed securely with a knot so it stays where it's needed most.
            </p>
            <p className="mt-6 serif italic text-[18px] md:text-[20px] text-foreground">
              "Be the reason a stray sleeps warm tonight."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-foreground text-background text-[11px] uppercase tracking-[0.26em] hover:bg-accent transition-colors"
              >
                Sponsor a Bori Bed
              </a>
              <a
                href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-foreground text-foreground text-[11px] uppercase tracking-[0.26em] hover:bg-foreground hover:text-background transition-colors"
              >
                Volunteer to Tie Beds
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative min-h-[280px] md:min-h-[520px]">
            <img
              src={boriBed.url}
              alt="Two stray dogs resting on a bori (jute sack) bed against an ochre wall"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="plate mt-24 md:mt-32 mb-8">03 — Upcoming & Recurring</div>
        <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          What's happening in the neighbourhoods.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((e) => (
            <article
              key={e.title}
              className="border border-border p-7 md:p-9 bg-card hover:border-foreground/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] uppercase tracking-[0.28em] text-accent">
                  {e.tag}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {e.when} · {e.time}
                </span>
              </div>
              <h3 className="serif text-[24px] md:text-[28px] leading-[1.15] text-foreground">
                {e.title}
              </h3>
              <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                {e.where}
              </p>
              <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
                {e.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const roles = [
  {
    role: "Feeder",
    commit: "1–2 hours / week",
    body: "Adopt a lane. Feed the regulars on a fixed loop. The simplest, most consistent act of care.",
  },
  {
    role: "Rescuer",
    commit: "On call",
    body: "Respond to local sightings — injured, abandoned or stuck animals. Training provided.",
  },
  {
    role: "Foster Parent",
    commit: "1–4 weeks",
    body: "Host a recovering animal at home. We cover food and medicines; a rescuer stays in touch.",
  },
  {
    role: "Transport Volunteer",
    commit: "As available",
    body: "Drive animals to vets and camps. Two-wheeler or car owners especially needed.",
  },
  {
    role: "Awareness Lead",
    commit: "Monthly",
    body: "Run small school or society sessions on coexistence and safe interaction with street animals.",
  },
  {
    role: "Logger / Coordinator",
    commit: "Remote",
    body: "Track cases on WhatsApp, update records, follow up on treatment and recovery.",
  },
];

function Volunteer() {
  return (
    <section className="concrete light-shaft py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="plate mb-8">04 — Become a Volunteer</div>
        <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          Pick a role.
          <br />
          <span className="italic text-accent">Start this week.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-[1.85] text-muted-foreground">
          You don't need experience. You need a lane, a phone, and an hour. We'll
          guide you the rest of the way through the community WhatsApp group.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.role} className="border border-border bg-background p-7">
              <h3 className="serif text-[22px] md:text-[24px] text-foreground">{r.role}</h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-accent">
                {r.commit}
              </p>
              <p className="mt-5 text-[14px] leading-[1.8] text-muted-foreground">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="https://chat.whatsapp.com/LpCsjPC4jey28ZcdiK4hzD?s=cl&p=a&ilr=2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-7 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
          >
            Join the WhatsApp Circle
          </a>
          <a
            href="tel:+917978562404"
            className="inline-flex items-center justify-center px-7 py-4 border border-foreground text-foreground text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors"
          >
            Call +91 79785 62404
          </a>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="py-24 md:py-36 border-b border-border">
      <div className="mx-auto max-w-[900px] px-5 md:px-12 text-center">
        <Sprig className="mx-auto mb-10 h-6 w-28 text-accent" />
        <p className="serif italic text-[26px] md:text-[40px] leading-[1.25] text-foreground">
          "Every neighbourhood has its own story —
          <br />
          come help write the next chapter of yours."
        </p>
      </div>
    </section>
  );
}

function FooterMini() {
  return (
    <footer className="on-dark concrete-dark text-background py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 grid md:grid-cols-3 gap-10 text-background/80">
        <div>
          <div className="eyebrow mb-4 text-background/55">Get in touch</div>
          <p className="text-[14px] leading-[1.85]">
            hello@streetkind.org
            <br />
            <a href="tel:+917978562404" className="hover:text-accent">
              +91 79785 62404
            </a>
            <br />
            Our city — India
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4 text-background/55">Explore</div>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/community" className="hover:text-accent">Community</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events & Volunteers</Link></li>
            <li><Link to="/fundraising" className="hover:text-accent">Fundraising</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4 text-background/55">Mohalle Mastane · 2025</div>
          <p className="text-[13px] leading-[1.85] text-background/65">
            Coexistence · Compassion · Togetherness
          </p>
        </div>
      </div>
    </footer>
  );
}

function EventsPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Events />
      <Volunteer />
      <Closing />
      <FooterMini />
    </main>
  );
}