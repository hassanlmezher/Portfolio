function Contact() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-8 lg:px-12" data-reveal>
      <div className="glass-card rounded-[32px] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] sm:text-[10px] sm:tracking-[0.5em]">Contact</p>
            <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-5xl">
              Let’s build something unforgettable.
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              Share your idea, timeline, or product challenge. I’ll respond quickly and keep everything clear.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="w-full rounded-full bg-[color:var(--accent)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.35em] sm:w-auto"
              >
                Send Email
              </a>
              <a
                href="tel:+96170980367"
                className="w-full rounded-full border border-[color:var(--ring)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-white/40 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.35em] sm:w-auto"
              >
                Call Directly
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[26px] border border-[color:var(--ring)] bg-black/40 p-4 sm:p-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] sm:text-[10px] sm:tracking-[0.35em]">Email</p>
              <a
                href="mailto:hassanmezher084@gmail.com"
                className="mt-2 inline-flex break-all text-[13px] font-semibold text-[color:var(--ink)] transition-colors hover:text-white sm:text-[15px]"
              >
                hassanmezher084@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] sm:text-[10px] sm:tracking-[0.35em]">Phone</p>
              <a
                href="tel:+96170980367"
                className="mt-2 inline-flex break-all text-[13px] font-semibold text-[color:var(--ink)] transition-colors hover:text-white sm:text-[15px]"
              >
                +961 70980367
              </a>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] sm:text-[10px] sm:tracking-[0.35em]">Location</p>
              <p className="mt-2 text-[13px] font-semibold text-[color:var(--ink)] sm:text-[15px]">Lebanon, Chouf</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/hassanlmezher"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--ring)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white sm:px-4 sm:text-[10px] sm:tracking-[0.25em]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-mezher-7475b6304/"
                className="rounded-full border border-[color:var(--ring)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white sm:px-4 sm:text-[10px] sm:tracking-[0.25em]"
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
