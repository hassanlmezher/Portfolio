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
    <section id="skills" className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-4 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[color:var(--muted)]">Capabilities</p>
        <h2 className="font-display text-4xl text-[color:var(--ink)] sm:text-5xl">Built for precision.</h2>
        <p className="mx-auto max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          A focused stack that keeps delivery clean, fast, and scalable.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="glass-card rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--ink)]">{group.title}</h3>
            <div className="mt-4 grid gap-2 text-[13px] text-[color:var(--ink-soft)]">
              {group.items.map((item) => (
                <div key={`${group.title}-${item}`} className="rounded-xl border border-[color:var(--ring)] px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
