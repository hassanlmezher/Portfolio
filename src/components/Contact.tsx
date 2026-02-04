function Contact() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-8 lg:px-12" data-reveal>
      <div className="panel-strong relative overflow-hidden rounded-[32px] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 top-8 h-52 w-52 rounded-full bg-[color:var(--accent)]/18 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-8 h-52 w-52 rounded-full bg-[color:var(--accent-2)]/18 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">Contact</p>
            <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
              Let’s build something unforgettable.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              Share your idea, timeline, or product challenge. I’ll respond quickly and keep everything clear and calm.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:w-auto"
              >
                Send Email
              </a>
              <a
                href="tel:+96170980367"
                className="w-full rounded-full border border-[color:var(--ring)] bg-transparent px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:w-auto"
              >
                Call Directly
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[26px] border border-[color:var(--ring)] bg-[color:var(--panel)] p-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">Email</p>
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]"
              >
                hassanmezher084@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">Phone</p>
              <a
                href="tel:+96170980367"
                className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]"
              >
                +961 70980367
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">Location</p>
              <p className="mt-2 text-[15px] font-semibold text-[color:var(--ink)]">Lebanon, Chouf</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/hassanlmezher"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--ring)] bg-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-mezher-7475b6304/"
                className="rounded-full border border-[color:var(--ring)] bg-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
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
