const skillGroups = [
  {
    title: 'Frontend Craft',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Design Systems'],
  },
  {
    title: 'Backend Systems',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Server Security'],
  },
  {
    title: 'Data + Tools',
    items: ['MongoDB', 'Supabase', 'Git + GitHub', 'Postman', 'Performance Audits'],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Skills</p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            A toolkit designed for modern, dependable web products.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          I combine product thinking with hands-on engineering to build interfaces and systems that stay fast and
          intuitive as they scale.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="glass-card group rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-2"
            data-reveal
          >
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                {group.title}
              </p>
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-70" />
            </div>
            <div className="mt-4 grid gap-2 text-[14px] text-[color:var(--ink)]">
              {group.items.map((item) => (
                <div
                  key={`${group.title}-${item}`}
                  className="rounded-xl border border-white/70 bg-white/80 px-3 py-2"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-[color:var(--paper-strong)]">
              <div
                className="h-full rounded-full bg-[color:var(--accent-2)]"
                style={{ width: `${75 + index * 8}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
