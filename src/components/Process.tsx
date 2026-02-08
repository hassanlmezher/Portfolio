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
    <section id="process" className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[color:var(--muted)]">Process</p>
          <h2 className="font-display mt-3 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Clean, deliberate steps.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          Each phase is designed to keep momentum steady and quality uncompromised.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="glass-card rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-[color:var(--panel-strong)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">{step.title}</h3>
            </div>
            <p className="mt-3 text-[14px] leading-6 text-[color:var(--ink-soft)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
