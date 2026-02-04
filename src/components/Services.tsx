const services = [
  {
    title: 'Product Direction',
    description: 'Align on goals, define the core flow, and shape a roadmap that stays lean and focused.',
    tags: ['Workshops', 'UX Flow', 'Roadmaps'],
  },
  {
    title: 'Full-Stack Build',
    description: 'Mobile-first UI, reliable APIs, authentication, and data layers built for scale.',
    tags: ['React', 'Node.js', 'Databases'],
  },
  {
    title: 'Launch + Growth',
    description: 'Polished releases, performance tuning, and ongoing iteration with real user feedback.',
    tags: ['QA', 'Analytics', 'Optimization'],
  },
]

function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-8 lg:px-12" data-reveal>
      <div className="panel relative overflow-hidden rounded-[30px] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 top-10 h-40 w-40 rounded-full bg-[color:var(--accent-3)]/18 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-6 h-40 w-40 rounded-full bg-[color:var(--accent)]/16 blur-3xl" />
        <div className="relative z-10 grid gap-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">Services</p>
              <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
                Mobile-first delivery with a crisp, premium finish.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              From strategy to launch, I focus on clarity, speed, and interfaces that feel effortless on mobile.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[24px] border border-[color:var(--ring)] bg-[color:var(--panel-strong)] p-5 transition-all duration-300 hover:-translate-y-1"
                data-reveal
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[color:var(--ink)]">{service.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[color:var(--muted)]">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--ring)] bg-transparent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
