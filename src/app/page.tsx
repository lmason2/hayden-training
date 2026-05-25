import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";

/* ─── Content ────────────────────────────────────────────────────────────────
   Swap copy and assets here when ready.
──────────────────────────────────────────────────────────────────────────── */

const HERO = {
  eyebrow: "Private Performance Training",
  headingLine1: "Strength for longevity",
  headingLine2: "and elevated living.",
  body: "Bespoke coaching for those who demand precision, discretion, and results that last a lifetime.",
  ctaPrimary: "Begin Your Practice",
  ctaSecondary: "Explore Services",
};

const SERVICES = [
  {
    id: "personal-training",
    number: "01",
    title: "Private Training",
    subtitle: "In-Person · Studio",
    description:
      "One-to-one sessions built around your physiology, schedule, and long-term ambitions. Strength, mobility, and conditioning — curated for the long game.",
  },
  {
    id: "distance-coaching",
    number: "02",
    title: "Distance Running",
    subtitle: "Remote Coaching",
    description:
      "Structured programmes from 5K to marathon. Precision planning, weekly reviews, data-informed adjustments, and direct coach access throughout.",
  },
  {
    id: "online-programs",
    number: "03",
    title: "Online Programmes",
    subtitle: "Self-Directed",
    description:
      "Expertly designed training systems you can follow from anywhere. The same rigour and structure — without the full coaching commitment.",
  },
];

const ABOUT = {
  eyebrow: "The Coach",
  heading: "Hayden Mason",
  body: [
    "A certified performance coach with a background spanning strength training, mobility, and distance athletics — Hayden's methodology is grounded in the conviction that true fitness is a lifelong practice, not a destination.",
    "Working with a selective clientele across private studio and remote settings, the focus is on building sustainable, intelligent systems that honour the body's long-term potential rather than chasing short-term results.",
    "Every programme is designed with intention: precise, deeply personalised, and built to evolve alongside the individual.",
  ],
};

const PHILOSOPHY = {
  statement:
    "True strength is not the peak of intensity — it is the accumulation of years of intelligent, intentional practice.",
};

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with Hayden changed my relationship with training entirely. The approach is thoughtful, sustainable, and remarkably effective.",
    name: "C. M.",
    role: "Client since 2022",
  },
  {
    id: 2,
    quote:
      "I have trained with coaches across three continents. This is the first programme that genuinely prioritised my longevity alongside my performance.",
    name: "A. R.",
    role: "Marathon Runner",
  },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <About />
      <Testimonials />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "var(--color-bg)", paddingTop: "5rem" }}
    >
      <div className="mx-auto max-w-6xl w-full px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="flex flex-col gap-8 animate-fade-in-up">

          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div style={{ height: "2px", width: "20px", backgroundColor: "var(--hm-terracotta)" }} />
            <span className="label-caps">{HERO.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              color: "var(--color-primary)",
            }}
          >
            {HERO.headingLine1}
            <br />
            <em style={{ fontStyle: "italic" }}>{HERO.headingLine2}</em>
          </h1>

          {/* Body */}
          <p
            className="text-sm leading-relaxed max-w-md animate-fade-in-up delay-1"
            style={{ color: "var(--color-muted)", letterSpacing: "0.025em" }}
          >
            {HERO.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-in-up delay-2">
            <Link href="/contact" className="btn-primary">
              {HERO.ctaPrimary}
            </Link>
            <Link
              href="/#services"
              className="label-caps transition-opacity duration-300 hover:opacity-100"
              style={{
                color: "var(--color-muted)",
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "2px",
                opacity: 0.7,
              }}
            >
              {HERO.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative hidden lg:block animate-fade-in delay-3">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              maxHeight: "600px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
            }}
          >
            <HeroCarousel />
          </div>
          {/* Decorative offset frame */}
          <div
            className="absolute -bottom-4 -right-4 pointer-events-none"
            style={{
              width: "100%",
              maxHeight: "600px",
              height: "100%",
              border: "1.5px solid var(--hm-sage)",
              opacity: 0.55,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="h-10 w-px" style={{ backgroundColor: "var(--color-border)" }} />
        <span className="label-caps" style={{ fontSize: "0.55rem" }}>Scroll</span>
      </div>
    </section>
  );
}

/* ─── Statement ───────────────────────────────────────────────────────────── */

function Statement() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--hm-dust-blue)", scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto max-w-4xl px-8 text-center">

        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(46,41,37,0.2)" }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ backgroundColor: "var(--hm-terracotta)" }}
          />
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(46,41,37,0.2)" }} />
        </div>

        <blockquote
          className="text-2xl sm:text-3xl md:text-4xl leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--hm-charcoal)",
          }}
        >
          &ldquo;{PHILOSOPHY.statement}&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(46,41,37,0.2)" }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ backgroundColor: "var(--hm-terracotta)" }}
          />
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(46,41,37,0.2)" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────────────── */

function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-bg)", scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto max-w-6xl px-8">

        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ height: "2px", width: "20px", backgroundColor: "var(--hm-sage)" }} />
            <span className="label-caps">The Method</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              color: "var(--color-primary)",
            }}
          >
            A considered approach
            <br />
            <em style={{ fontStyle: "italic" }}>to every discipline.</em>
          </h2>
        </div>

        {/* Service cards */}
        <div
          className="grid md:grid-cols-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              hasDivider={index < SERVICES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  hasDivider,
}: {
  service: (typeof SERVICES)[number];
  hasDivider: boolean;
}) {
  return (
    <div
      className="service-card flex flex-col gap-6 p-10 group"
      style={{
        borderBottom: "1px solid var(--color-border)",
        borderRight: hasDivider ? "1px solid var(--color-border)" : undefined,
      }}
    >
      {/* Number */}
      <span
        className="text-5xl select-none"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontWeight: 300,
          color: "var(--hm-terracotta)",
          opacity: 0.55,
          lineHeight: 1,
        }}
      >
        {service.number}
      </span>

      {/* Title block */}
      <div>
        <h3
          className="text-2xl mb-1"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          {service.title}
        </h3>
        <p className="label-caps" style={{ fontSize: "0.6rem" }}>{service.subtitle}</p>
      </div>

      {/* Animated rule */}
      <div
        className="transition-all duration-500 group-hover:w-full"
        style={{ height: "2px", width: "2rem", backgroundColor: "var(--hm-sage)" }}
      />

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
        {service.description}
      </p>

      {/* Enquire link */}
      <Link
        href="/contact"
        className="self-start label-caps mt-auto pb-0.5 transition-colors duration-300 hover:opacity-100"
        style={{
          borderBottom: "1px solid var(--color-border)",
          color: "var(--color-muted)",
          opacity: 0.7,
        }}
      >
        Enquire →
      </Link>
    </div>
  );
}

/* ─── About ───────────────────────────────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-bg-muted)", scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Hayden portrait */}
          <div className="relative">
            {/* Decorative offset frame — behind the image */}
            <div
              className="absolute -top-4 -left-4 w-full h-full pointer-events-none"
              style={{
                border: "1.5px solid var(--hm-sage)",
                opacity: 0.6,
                zIndex: 0,
              }}
            />
            {/* Image — in front of frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                zIndex: 1,
              }}
            >
              <Image
                src="/hayden.JPG"
                alt="Hayden Mason"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8 lg:pt-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div style={{ height: "2px", width: "20px", backgroundColor: "var(--hm-terracotta)" }} />
                <span className="label-caps">{ABOUT.eyebrow}</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                  color: "var(--color-primary)",
                }}
              >
                {ABOUT.heading}
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {ABOUT.body.map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-[1.9]"
                  style={{ color: "var(--color-muted)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/contact" className="btn-outline">
                Work Together
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────────── */

function Testimonials() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-6xl px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ height: "2px", width: "20px", backgroundColor: "var(--hm-sage)" }} />
            <span className="label-caps" style={{ color: "var(--hm-sage)" }}>
              Client Perspectives
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              color: "var(--color-bg)",
            }}
          >
            What clients say.
          </h2>
        </div>

        {/* Quotes */}
        <div
          className="grid md:grid-cols-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className="p-10 flex flex-col justify-between gap-8"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                borderRight:
                  index < TESTIMONIALS.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : undefined,
              }}
            >
              <blockquote
                className="text-xl sm:text-2xl leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--color-bg)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px w-8" style={{ backgroundColor: "var(--hm-sage)" }} />
                <div>
                  <p className="label-caps" style={{ color: "rgba(245,241,234,0.5)", fontSize: "0.6rem" }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(245,241,234,0.32)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-outline-light">
            Begin Your Practice
          </Link>
        </div>
      </div>
    </section>
  );
}
