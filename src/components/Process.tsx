const steps = [
  {
    title: 'Discover',
    description: 'Align on goals, users, and constraints. Define success metrics and the right MVP scope.',
  },
  {
    title: 'Design',
    description: 'Craft mobile-first flows and visual systems that feel clear, fast, and premium.',
  },
  {
    title: 'Build',
    description: 'Develop frontend, backend, and data layers with performance and stability in mind.',
  },
  {
    title: 'Launch',
    description: 'Ship with confidence, monitor impact, and iterate based on real usage.',
  },
]

function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-8 lg:px-12" data-reveal>
      <div className="glass-card-strong relative overflow-hidden rounded-[30px] p-5 sm:p-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[color:var(--accent-2)]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
        <div className="relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Process</p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            A calm, structured flow built for quality.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
            Every step is transparent, with clear deliverables and checkpoints to keep momentum steady.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-white text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
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
