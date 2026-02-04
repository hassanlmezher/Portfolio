function Contact() {
  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-6xl px-5 pb-20 pt-6 sm:px-8 lg:px-12"
      data-reveal
    >
      <div className="glass-card-strong relative overflow-hidden rounded-[36px] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-[color:var(--accent-2)]/20 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Contact</p>
            <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
              Let’s build something unforgettable together.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              If you have a project in mind or need a dependable full-stack partner, I’m ready to help. Send a message
              and I’ll reply quickly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="rounded-full bg-[color:var(--ink)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent)]"
              >
                Send Email
              </a>
              <a
                href="tel:+96170980367"
                className="rounded-full border border-[color:var(--ring)] bg-white/85 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Call Directly
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_25px_60px_-45px_rgba(12,18,28,0.4)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Email</p>
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]"
              >
                hassanmezher084@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Phone</p>
              <a
                href="tel:+96170980367"
                className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]"
              >
                +961 70980367
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Location</p>
              <p className="mt-2 text-[15px] font-semibold text-[color:var(--ink)]">Lebanon, Chouf</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/hassanlmezher"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--ring)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-mezher-7475b6304/"
                className="rounded-full border border-[color:var(--ring)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
