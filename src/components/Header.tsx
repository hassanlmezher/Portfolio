function Header() {
  const cvUrl = `${import.meta.env.BASE_URL}Hassan_Mezher_CV.pdf`

  return (
    <header className="pt-6">
      <div className="panel-strong rounded-[28px] px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center lg:flex-nowrap">
          <div className="flex items-center gap-4 sm:flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--ring)] bg-[color:var(--accent)]/10 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              HM
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--muted)]">Hassan Mezher</div>
              <div className="text-[12px] font-semibold text-[color:var(--ink)]">Full-stack developer</div>
            </div>
          </div>

          <nav className="scrollbar-hide hidden min-w-[280px] flex-1 items-center justify-center gap-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)] lg:flex">
            {[
              ['#about', 'About'],
              ['#services', 'Services'],
              ['#skills', 'Skills'],
              ['#projects', 'Projects'],
              ['#process', 'Process'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-[color:var(--accent)]">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex w-full flex-col gap-2 sm:ml-auto sm:w-auto sm:flex-row sm:items-center sm:flex-shrink-0">
            <a
              href="#projects"
              className="w-full rounded-full border border-[color:var(--ring)] bg-transparent px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:w-auto"
            >
              View Work
            </a>
            <a
              href={cvUrl}
              download
              className="w-full rounded-full bg-[color:var(--accent)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
