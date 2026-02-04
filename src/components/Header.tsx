function Header() {
  const cvUrl = `${import.meta.env.BASE_URL}Hassan_Mezher_CV.pdf`

  return (
    <header className="pt-4">
      <div className="glass-card flex flex-col gap-3 rounded-[22px] px-3 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4 sm:rounded-[28px]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-white text-[12px] font-semibold text-[color:var(--ink)]">
              HM
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[color:var(--muted)]">HASSAN MEZHER</div>
          </div>
          <span className="rounded-full border border-[color:var(--ring)] bg-white/80 px-3 py-1 text-[9px] tracking-[0.25em] text-[color:var(--muted)] sm:hidden">
            AVAILABLE
          </span>
        </div>

        <nav className="scrollbar-hide hidden w-full items-center gap-2 overflow-x-auto text-[9px] sm:flex sm:w-auto sm:gap-4">
          {[
            ['#about', 'ABOUT'],
            ['#services', 'SERVICES'],
            ['#skills', 'SKILLS'],
            ['#projects', 'PROJECTS'],
            ['#process', 'PROCESS'],
            ['#contact', 'CONTACT'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-full border border-[color:var(--ring)] bg-white/70 px-3 py-2 transition-colors hover:text-[color:var(--accent)] sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="w-full rounded-full border border-[color:var(--ring)] bg-white px-4 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:w-auto"
          >
            VIEW WORK
          </a>
          <a
            href={cvUrl}
            download
            className="w-full rounded-full bg-[color:var(--accent)] px-4 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-3)] sm:w-auto"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
