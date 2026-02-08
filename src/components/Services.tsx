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
    <section id="services" className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[color:var(--muted)]">Services</p>
          <h2 className="font-display mt-3 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Crafted like a product studio.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          Strategy, design, and build combined into one clean flow. Focused on clarity and high-end execution.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="glass-card rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--ink)]">{service.title}</h3>
            <p className="mt-2 text-[14px] leading-6 text-[color:var(--ink-soft)]">{service.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--ring)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
