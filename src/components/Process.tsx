const steps = [
  {
    title: 'Discover',
    description:
      'Align on goals, users, and constraints. Define success metrics and the most valuable MVP scope.',
  },
  {
    title: 'Design',
    description:
      'Craft interface flows and a visual system that balances clarity, emotion, and speed.',
  },
  {
    title: 'Build',
    description:
      'Develop the frontend, backend, and data layer with performance, accessibility, and scalability in mind.',
  },
  {
    title: 'Launch',
    description:
      'Ship with confidence, monitor impact, and iterate based on real-world usage.',
  },
]

function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12"
      data-reveal
    >
      <div className="glass-card-strong relative overflow-hidden rounded-[32px] p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[color:var(--accent-2)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[color:var(--accent)]/25 blur-3xl" />
        <div className="relative z-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
            Process
          </p>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            A calm, structured approach from first call to launch day.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
            Every step stays transparent, with clear deliverables and checkpoints to keep the momentum steady.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-white text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-[color:var(--ink)]">{step.title}</h3>
                </div>
                <p className="mt-3 text-[14px] leading-6 text-[color:var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
