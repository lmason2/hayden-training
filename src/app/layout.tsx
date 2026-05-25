import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  // TODO: Update with trainer's name and tagline
  title: "Hayden | Personal Trainer & Running Coach",
  description: "Personal training and distance running coaching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        {/* TODO: Replace with logo asset when available */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Hayden {/* ← trainer name */}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#services" className="hover:text-[var(--color-accent)] transition-colors">
            Services
          </Link>
          <Link href="/#about" className="hover:text-[var(--color-accent)] transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-muted)]">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Hayden {/* ← trainer name */}</span>
        {/* TODO: Add social links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
