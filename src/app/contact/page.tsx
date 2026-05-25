// ─── CONTENT ─────────────────────────────────────────────────────────────────
// TODO: Update email, social handles, and any booking link

const CONTACT_INFO = {
  email: "hello@hayden.com", // ← real email
  instagram: "@hayden", // ← IG handle
  instagramUrl: "#", // ← real IG URL
};

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-bg-muted)] min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-5xl w-full px-6 py-20 grid gap-12 lg:grid-cols-2 items-start">
        {/* Left: info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-600 leading-relaxed">
            Ready to get started, or just have a question? Fill out the form and I&apos;ll get back to you within 24–48 hours.
          </p>

          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              {CONTACT_INFO.instagram}
            </a>
          </div>
        </div>

        {/* Right: form */}
        {/* TODO: Wire up to a form backend (e.g. Resend, Formspree, or a Next.js Server Action) */}
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] p-8 flex flex-col gap-5">
      <Field label="Name" name="name" type="text" placeholder="Jane Smith" />
      <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="interest" className="text-sm font-medium">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="">Select a service…</option>
          <option value="personal-training">Personal Training</option>
          <option value="distance-coaching">Distance Running Coaching</option>
          <option value="online-programs">Online Programs</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me a bit about your goals…"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white hover:opacity-90 transition-opacity self-start"
      >
        Send Message
      </button>
    </form>
  );
}

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
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />
    </div>
  );
}
