const services = [
  {
    title: 'Product Strategy',
    description:
      'Clarify the problem, map the user journey, and design a product plan that aligns every feature with the business goal.',
    tags: ['Workshops', 'IA + UX', 'Roadmaps'],
  },
  {
    title: 'Full-Stack Build',
    description:
      'Modern frontends with reliable APIs, authentication, and scalable data layers — built for speed and clarity.',
    tags: ['React', 'Node.js', 'Databases'],
  },
  {
    title: 'Launch + Support',
    description:
      'Polished handoff, smooth releases, and iterations based on real user feedback and performance insight.',
    tags: ['QA', 'Analytics', 'Optimization'],
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12"
      data-reveal
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
            Services
          </p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            Everything you need to move from idea to a polished product.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          I partner with teams to shape, design, and ship digital products that feel effortless, respond fast, and scale
          with confidence.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="glass-card group rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_-55px_rgba(12,18,28,0.45)]"
            data-reveal
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)] opacity-70" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[color:var(--ink)]">{service.title}</h3>
            <p className="mt-3 text-[14px] leading-6 text-[color:var(--muted)]">{service.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--ring)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]"
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
