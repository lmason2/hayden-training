import Link from "next/link";

// ─── CONTENT ─────────────────────────────────────────────────────────────────
// Swap these out when you have real copy + assets.

const HERO = {
  headline: "Train Smarter. Run Farther.",
  subheadline:
    "Personal training and distance running coaching tailored to your goals — wherever you are.",
  cta: "Work With Me",
};

const SERVICES = [
  {
    id: "personal-training",
    title: "Personal Training",
    description:
      "One-on-one sessions built around your body, your schedule, and your goals. Strength, mobility, and conditioning — all in one plan.",
  },
  {
    id: "distance-coaching",
    title: "Distance Running Coaching",
    description:
      "Structured training plans for 5K to marathon. Remote coaching with weekly check-ins, data review, and adaptive programming.",
  },
  {
    id: "online-programs",
    title: "Online Programs",
    description:
      "Self-paced programs you can follow from anywhere. Perfect for runners who want structure without a full coaching commitment.",
  },
];

const ABOUT = {
  heading: "Hey, I'm Hayden.",
  body: [
    "I'm a certified personal trainer and running coach with a passion for helping people move better and go farther.",
    "Whether you're training for your first 5K, chasing a PR, or just trying to build a sustainable fitness habit — I build plans that fit your life.",
    "I believe in honest coaching, sustainable progress, and showing up consistently over the long haul.",
  ],
};

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-28 flex flex-col items-start gap-6">
        {/* TODO: Hero background image / photo goes here */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
          {HERO.headline}
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">{HERO.subheadline}</p>
        <Link
          href="/contact"
          className="mt-2 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white hover:opacity-90 transition-opacity"
        >
          {HERO.cta}
        </Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg-muted)]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">What I Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-[var(--color-bg)] rounded-2xl p-6 border border-[var(--color-border)] flex flex-col gap-3"
            >
              {/* TODO: icon/image slot */}
              <div className="h-10 w-10 rounded-lg bg-[var(--color-accent)] opacity-30" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col lg:flex-row gap-12 items-center">
        {/* TODO: Replace with <Image src="/hayden.jpg" ... /> when photo is ready */}
        <div className="shrink-0 w-64 h-64 rounded-2xl bg-[var(--color-bg-muted)] border border-[var(--color-border)] flex items-center justify-center text-gray-400 text-sm">
          Photo coming soon
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{ABOUT.heading}</h2>
          {ABOUT.body.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
          <Link
            href="/contact"
            className="mt-2 self-start rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2 text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
