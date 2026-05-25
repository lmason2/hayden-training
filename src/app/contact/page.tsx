import Link from "next/link";

/* ─── Content ────────────────────────────────────────────────────────────────
   TODO: Update email, Instagram handle, and booking link.
──────────────────────────────────────────────────────────────────────────── */

const CONTACT_INFO = {
  email:        "hello@hayden.com",  // ← real email
  instagram:    "@hayden",            // ← IG handle
  instagramUrl: "#",                  // ← real IG URL
};

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>

      {/* Page header */}
      <div
        className="pt-32 pb-20 md:pb-28"
        style={{
          backgroundColor: "var(--color-bg-muted)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-6xl px-8">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ height: "2px", width: "20px", backgroundColor: "var(--hm-terracotta)" }} />
            <span className="label-caps">Contact</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl max-w-2xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              color: "var(--color-primary)",
            }}
          >
            Begin your
            <br />
            <em style={{ fontStyle: "italic" }}>practice.</em>
          </h1>
          <p
            className="mt-6 text-sm leading-relaxed max-w-md"
            style={{ color: "var(--color-muted)", letterSpacing: "0.025em" }}
          >
            Ready to get started, or simply want to learn more? Reach out — I respond
            to all enquiries personally within 24–48 hours.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8 grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "1.3rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-primary)",
                }}
              >
                Direct Contact
              </h2>

              <div className="flex flex-col">
                <div
                  className="py-4"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <p className="label-caps mb-1.5" style={{ fontSize: "0.6rem" }}>Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="link-accent-hover text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div
                  className="py-4"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <p className="label-caps mb-1.5" style={{ fontSize: "0.6rem" }}>Instagram</p>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent-hover text-sm"
                  >
                    {CONTACT_INFO.instagram}
                  </a>
                </div>
              </div>
            </div>

            {/* Pull quote — desktop only */}
            <div className="hidden lg:block">
              <div className="thin-line mb-8" />
              <blockquote
                className="text-xl leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--color-muted)",
                }}
              >
                &ldquo;Every practice begins with a single conversation.&rdquo;
              </blockquote>
            </div>

            {/* Back link */}
            <Link
              href="/"
              className="label-caps self-start transition-opacity duration-300 hover:opacity-100"
              style={{ opacity: 0.42, fontSize: "0.6rem" }}
            >
              ← Back to home
            </Link>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Contact Form ────────────────────────────────────────────────────────── */
/* TODO: Wire up to a form backend (Resend, Formspree, or Next.js Server Action) */

function ContactForm() {
  return (
    <form
      className="flex flex-col gap-8 p-10 md:p-12"
      style={{ border: "1px solid var(--color-border)" }}
    >
      <div className="grid sm:grid-cols-2 gap-8">
        <Field label="Name" name="name" type="text" placeholder="Your name" />
        <Field label="Email" name="email" type="email" placeholder="your@email.com" />
      </div>

      {/* Service select */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="interest"
          className="label-caps"
          style={{ fontSize: "0.6rem" }}
        >
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="field-underline"
          style={{ cursor: "pointer" }}
        >
          <option value="">Select a service</option>
          <option value="personal-training">Private Training</option>
          <option value="distance-coaching">Distance Running Coaching</option>
          <option value="online-programs">Online Programmes</option>
          <option value="other">Something else</option>
        </select>
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="label-caps"
          style={{ fontSize: "0.6rem" }}
        >
          Tell me about your goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="A little context goes a long way…"
          className="field-underline"
          style={{ resize: "none" }}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button type="submit" className="btn-primary">
          Send Enquiry
        </button>
      </div>
    </form>
  );
}

/* ─── Field ───────────────────────────────────────────────────────────────── */

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="label-caps"
        style={{ fontSize: "0.6rem" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="field-underline"
      />
    </div>
  );
}
