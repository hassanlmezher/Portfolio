function Header() {
  return (
    <header className="pt-6">
      <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-[26px] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)] sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-white text-[12px] font-semibold text-[color:var(--ink)]">
            HM
          </div>
          <div className="text-[10px] tracking-[0.3em] text-[color:var(--muted)]">HASSAN MEZHER</div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-[10px]">
          <a href="#about" className="transition-colors hover:text-[color:var(--accent)]">
            ABOUT
          </a>
          <a href="#services" className="transition-colors hover:text-[color:var(--accent)]">
            SERVICES
          </a>
          <a href="#skills" className="transition-colors hover:text-[color:var(--accent)]">
            SKILLS
          </a>
          <a href="#projects" className="transition-colors hover:text-[color:var(--accent)]">
            PROJECTS
          </a>
          <a href="#process" className="transition-colors hover:text-[color:var(--accent)]">
            PROCESS
          </a>
          <a href="#contact" className="transition-colors hover:text-[color:var(--accent)]">
            CONTACT
          </a>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#projects"
            className="rounded-full border border-[color:var(--ring)] bg-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            VIEW WORK
          </a>
          <a
            href="/Hassan_Mezher_CV.pdf"
            download
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-3)]"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
