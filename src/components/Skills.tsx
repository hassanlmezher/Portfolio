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
    <section id="skills" className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">Skills</p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            A toolkit built for fast, mobile-first delivery.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          The stack combines rapid UI delivery with dependable backend architecture — optimized for clarity and speed.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="panel rounded-[26px] p-5 transition-all duration-300 hover:-translate-y-1"
            data-reveal
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                {group.title}
              </p>
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            </div>
            <div className="mt-4 grid gap-2 text-[14px] text-[color:var(--ink)]">
              {group.items.map((item) => (
                <div key={`${group.title}-${item}`} className="rounded-xl border border-[color:var(--ring)] bg-[color:var(--panel-strong)] px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[color:var(--ring)]">
              <div className="h-full rounded-full bg-[color:var(--accent-3)]" style={{ width: `${74 + index * 8}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
