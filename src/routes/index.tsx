import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteMenu } from "@/components/SiteMenu";
import { Sprig } from "@/components/Sprig";
import { VolunteerForm } from "@/components/VolunteerForm";


import logo from "@/assets/logo.png.asset.json";
import neighbourhood from "@/assets/neighbourhood-cares.png.asset.json";
import careExists from "@/assets/care-already-exists.jpg.asset.json";
import findCircle from "@/assets/find-your-circle.jpg.asset.json";
import heroCourtyard from "@/assets/hero-courtyard.jpg.asset.json";
import catCourtyard from "@/assets/cat-courtyard.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohalle Mastane — A Trust for Coexistence, Compassion & Togetherness" },
      {
        name: "description",
        content:
          "Mohalle Mastane is a community-led trust working for street animals in the city — a decentralised network of feeders, rescuers and caregivers turning every neighbourhood into a circle of care.",
      },
      { property: "og:title", content: "Mohalle Mastane" },
      {
        property: "og:description",
        content:
          "A community-led trust for street animal care. Coexistence. Compassion. Togetherness.",
      },
      { property: "og:image", content: neighbourhood.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: neighbourhood.url },
    ],
  }),
  component: Home,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Mohalle Mastane" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="serif text-[15px] md:text-[17px] tracking-[0.18em] uppercase">
              Mohalle Mastane
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Coexistence · Compassion · Togetherness
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/fundraising"
            hash="contribute"
            className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-foreground text-background text-[10px] md:text-[11px] uppercase tracking-[0.26em] hover:bg-accent transition-colors"
          >
            Donate
          </Link>

          <SiteMenu />
        </div>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="concrete light-shaft relative min-h-[88svh] border-b border-border overflow-hidden"
    >
      {/* structural hairlines — the geometry of the wall */}
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-foreground/8" />
      <div className="pointer-events-none absolute inset-y-0 left-[38%] w-px bg-foreground/8" />
      <div className="pointer-events-none absolute inset-x-0 top-[62%] h-px bg-foreground/8" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-12 min-h-[88svh] flex flex-col justify-end pb-16 md:pb-24 pt-32 md:pt-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-6">
            <div className="plate mb-8 md:mb-12">01 — A Trust for Coexistence</div>
            <h1 className="serif text-[44px] leading-[1.02] md:text-[92px] md:leading-[0.94] tracking-[-0.03em] text-foreground">
              Coexistence.
              <br />
              Compassion.
              <br />
              <span className="italic text-accent">Togetherness.</span>
            </h1>
            <Sprig className="mt-8 h-6 w-28 text-accent" />
            <p className="mt-7 max-w-md text-[14px] md:text-[15px] leading-[2] text-muted-foreground">
              A community-led trust caring for the street animals of the city.
              Every lane a quiet room of coexistence — light, shelter, and the
              patience to heal together.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center px-8 py-4 bg-ink text-background text-[10px] uppercase tracking-[0.34em] hover:bg-accent transition-colors"
              >
                Join the Movement
              </a>
              <Link
                to="/fundraising"
                hash="contribute"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/40 text-[10px] uppercase tracking-[0.34em] hover:border-accent hover:text-accent transition-colors"
              >
                Donate
              </Link>

            </div>
          </div>
          <div className="md:col-span-6 order-first md:order-last">
            <figure className="relative">
              <img
                src={heroCourtyard.url}
                alt="A street dog resting in a sunlit concrete courtyard beneath dappled tree shadows"
                width={1920}
                height={1088}
                className="w-full h-[240px] md:h-[520px] object-cover"
              />
              <figcaption className="mt-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" />
                Every Neighbourhood. One Shared Mission.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section id="about" className="py-28 md:py-44 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 grid md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-5">
          <div className="plate mb-10">02 — About the Trust</div>
          <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.01em]">
            A collective effort,
            <br />
            <span className="italic">not a service.</span>
          </h2>
          <Sprig className="mt-8 h-6 w-28 text-accent" />
          <img
            src={catCourtyard.url}
            alt="A street cat sitting on a sunlit concrete step beside a slender courtyard tree"
            loading="lazy"
            width={1280}
            height={1600}
            className="mt-10 w-full h-[280px] md:h-[420px] object-cover"
          />
        </div>
        <div className="md:col-span-7 md:pt-3 space-y-6 text-[15px] md:text-[17px] leading-[1.85] text-muted-foreground">
          <p>
            Mohalle Mastane is not an isolated charity operating from a single
            shelter. We are a decentralised trust that empowers neighbours to
            coordinate feeding, rescue, and medical first-aid in their own
            local circles.
          </p>
          <p>
            By giving people on the ground the knowledge, backing and access
            to resources they need, we turn everyday acts of kindness into a
            resilient, permanent safety network for the animals of the city.
          </p>
        </div>

      </div>
    </section>
  );
}

function CareExists() {
  return (
    <section className="concrete light-shaft border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <img
            src={careExists.url}
            alt="Across every street, across every neighbourhood — feeders, caregivers and neighbours look after street animals"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="plate mb-10">03 — The Truth We Begin From</div>
          <h2 className="serif text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.01em]">
            Care already exists.
            <br />
            <span className="italic text-accent">Across every street.</span>
          </h2>
          <p className="mt-7 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            In every lane there is already a feeder, a caregiver, a quiet
            neighbour who steps out at dusk with a bowl of water. We don't
            replace them — we connect them, support them, and give their
            kindness a home.
          </p>
        </div>
      </div>
    </section>
  );
}

function Neighbourhood() {
  return (
    <section id="how" className="py-28 md:py-44 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="plate mb-10">04 — How It Works</div>
          <h2 className="serif text-[34px] md:text-[58px] leading-[1.05] tracking-[-0.02em]">
            Your neighbourhood
            <br />
            <span className="italic">already cares.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            A Street Circle is a small, local network of feeders, rescuers,
            volunteers and pet parents — all just minutes away from you.
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto">
          <img
            src={neighbourhood.url}
            alt="Street Circle — feeders, caregivers, volunteers, rescuers, pet parents, young helpers and water keepers around you"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "100+", label: "Rescue Cases" },
    { n: "20+", label: "Active Rescuers" },
    { n: "200+", label: "Fostered & Cared" },
    { n: "5", label: "Street Circles" },
  ];
  return (
    <section id="impact" className="on-dark concrete-dark light-shaft-dark border-y border-border text-background">
      <div className="relative z-[1] mx-auto max-w-[1400px] px-5 md:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <div className="plate mb-10 text-accent">05 — Our Impact So Far</div>
            <h2 className="serif text-[30px] md:text-[44px] leading-[1.1] tracking-[-0.01em] text-background">
              Quiet work,
              <br />
              <span className="italic">in real numbers.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3 text-[14px] md:text-[15px] leading-[1.85] text-background/70">
            Every rescue is self-funded by local residents, foster homes and
            rescuers across the city — Riverside Colony, Old Town, North Ward and
            the Sector areas. These are early numbers from a growing movement.
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

function FindCircle() {
  return (
    <section className="py-28 md:py-44 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5">
          <div className="plate mb-10">06 — Find Your Circle</div>
          <h2 className="serif text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.01em]">
            Connect with people
            <br />
            <span className="italic text-accent">already helping nearby.</span>
          </h2>
          <p className="mt-7 text-[15px] md:text-base leading-[1.85] text-muted-foreground">
            Feeders, volunteers, rescuers and pet parents in your neighbourhood form
            your circle of care. Step in as the role that fits your life — even
            ten minutes a week strengthens the network.
          </p>
          <ul className="mt-8 space-y-3 text-[14px] md:text-[15px]">
            {["Feeders", "Volunteers", "Rescuers", "Pet Parents", "Water Keepers"].map((r) => (
              <li key={r} className="flex items-baseline gap-4 border-b border-border pb-3">
                <span className="serif italic text-accent text-[14px]">·</span>
                <span className="tracking-[0.02em]">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <img
            src={findCircle.url}
            alt="Find your circle — feeders, volunteers, pet parents and rescuers nearby"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

function FourCs() {
  const items = [
    { n: "01", title: "Conscious Living", body: "Mindful, cruelty-free living through everyday choices, vegan nutrition, and local sustainable trade." },
    { n: "02", title: "Collective Empowerment", body: "Turning compassion into everyday neighbourhood action through awareness, local circles, and shared resources." },
    { n: "03", title: "Compassionate Coexistence", body: "Medical healing, street boundaries, emotional care, and respectful coexistence between humans and animals." },
    { n: "04", title: "Cultural Revival", body: "Reviving historical and spiritual values of empathy, responsibility and coexistence in every family and neighbourhood." },
  ];
  return (
    <section id="ideals" className="py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-16 md:mb-24">
          <div className="plate mb-10">07 — Our Core Ideals</div>
          <h2 className="serif text-[40px] md:text-[64px] tracking-[-0.02em]">
            our <span className="italic">4 c's</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 border-t border-border">
          {items.map((it, i) => (
            <article
              key={it.n}
              className={`p-7 md:p-12 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""}`}
            >
              <div className="flex items-baseline gap-5">
                <span className="serif italic text-accent text-[20px]">{it.n}</span>
                <h3 className="serif text-[22px] md:text-[28px] tracking-[-0.01em]">{it.title}</h3>
              </div>
              <p className="mt-5 text-[14px] md:text-[15px] leading-[1.85] text-foreground/80 max-w-md">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="concrete light-shaft border-t border-border py-28 md:py-44">
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-12">
        <div className="plate mb-10">08 — Partner in Compassion</div>
        <h2 className="serif text-[36px] md:text-[62px] leading-[1.05] tracking-[-0.02em]">
          Become a volunteer.
          <br />
          <span className="italic text-accent">Heal your street.</span>
        </h2>
        <div className="mt-10 md:mt-14 h-px w-24 bg-accent" />
        <p className="mt-8 max-w-xl text-[14px] md:text-[15px] leading-[2] text-muted-foreground">
          Every neighbourhood begins with one person who chooses to care. Step in,
          and we'll share the training, network, and resources to build a
          circle of compassion where you live.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            id="donate"
            to="/fundraising"
            hash="contribute"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
          >
            Donate
          </Link>
          <a
            href="#volunteer"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-[11px] uppercase tracking-[0.28em] hover:border-accent hover:text-accent transition-colors"
          >
            Volunteer
          </a>
          <Link
            to="/community"
            hash="stories"
            className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Share Your Story
          </Link>

        </div>

        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <div className="plate mb-8">Volunteer Sign-Up</div>
          <VolunteerForm id="volunteer" />
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="on-dark concrete-dark border-t border-border text-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-20 md:py-28 grid md:grid-cols-12 gap-10">

        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="serif text-[17px] tracking-[0.18em] uppercase text-background">
                Mohalle Mastane
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-background/60">
                Coexistence · Compassion · Togetherness
              </div>
            </div>
          </div>
          <p className="mt-6 text-[13px] leading-[1.85] text-background/65 max-w-sm">
            A community-led trust caring for street animals across the city.
            Rooted in neighbourhoods. Open to every lane.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="eyebrow mb-4 text-background/55">Explore</div>
          <ul className="space-y-3 text-[14px]">
            <li><a href="#about" className="text-background/85 hover:text-accent">About</a></li>
            <li><Link to="/community" className="text-background/85 hover:text-accent">Community</Link></li>
            <li><Link to="/events" className="text-background/85 hover:text-accent">Events & Volunteers</Link></li>
            <li><Link to="/fundraising" className="text-background/85 hover:text-accent">Fundraising</Link></li>
            <li><a href="#how" className="text-background/85 hover:text-accent">How It Works</a></li>
            <li><a href="#impact" className="text-background/85 hover:text-accent">Impact</a></li>
            <li><a href="#ideals" className="text-background/85 hover:text-accent">Ideals</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="eyebrow mb-4 text-background/55">Get in touch</div>
          <p className="text-[14px] leading-[1.85] text-background/85">
            hello@streetkind.org
            <br />
            Our city — India
          </p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.28em] text-background/55">
          <span>© {new Date().getFullYear()} Mohalle Mastane Trust</span>
          <span>Coexistence · Compassion · Togetherness</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <CareExists />
      <Neighbourhood />
      <Impact />
      <FindCircle />
      <FourCs />
      <Join />
      <Footer />
    </main>
  );
}
