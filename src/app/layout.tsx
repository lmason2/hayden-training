import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

/* ─── Fonts ──────────────────────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Hayden Mason | Private Performance & Longevity Training",
  description:
    "Bespoke performance coaching for longevity and elevated living. Private training, distance running coaching, and precision programming for those who demand lasting results.",
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ─── Navigation ─────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: "/#services",   label: "Services"  },
  { href: "/#about",      label: "About"     },
  { href: "/#philosophy", label: "Philosophy" },
];

function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "color-mix(in srgb, var(--hm-ivory) 94%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-8 py-5">

        {/* Wordmark */}
        <Link href="/" className="flex flex-col items-start" style={{ opacity: 1 }}>
          <span
            className="tracking-[0.22em] uppercase transition-opacity duration-300 hover:opacity-60"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              fontSize: "1.1rem",
              color: "var(--color-primary)",
            }}
          >
            Hayden Mason
          </span>
          <span className="label-caps mt-0.5" style={{ fontSize: "0.58rem" }}>
            Private Training
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label-caps transition-opacity duration-300 hover:opacity-100"
              style={{ opacity: 0.55 }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-nav">
            Begin
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link href="/contact" className="md:hidden btn-nav" style={{ padding: "0.5rem 1rem" }}>
          Begin
        </Link>
      </div>
    </header>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-muted)",
      }}
    >
      <div className="mx-auto max-w-6xl px-8 py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">

          {/* Brand */}
          <div>
            <p
              className="tracking-[0.22em] uppercase"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 400,
                fontSize: "1.1rem",
                color: "var(--color-primary)",
              }}
            >
              Hayden Mason
            </p>
            <p className="label-caps mt-1" style={{ fontSize: "0.58rem" }}>
              Private Performance Training
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="label-caps transition-opacity duration-300 hover:opacity-100"
                  style={{ opacity: 0.45 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="label-caps transition-opacity duration-300 hover:opacity-100"
                style={{ opacity: 0.45 }}
              >
                Instagram
              </a>
              <a
                href="mailto:hello@hayden.com"
                className="label-caps transition-opacity duration-300 hover:opacity-100"
                style={{ opacity: 0.45 }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="thin-line my-10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <blockquote
            className="text-xl leading-relaxed"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-muted)",
              maxWidth: "32rem",
            }}
          >
            &ldquo;Strength is not built in moments of intensity — it is forged through
            years of intelligent, intentional practice.&rdquo;
          </blockquote>
          <p className="label-caps shrink-0" style={{ opacity: 0.38, fontSize: "0.6rem" }}>
            © {new Date().getFullYear()} Hayden Mason
          </p>
        </div>
      </div>
    </footer>
  );
}
