import logoportfolio from '../images/logoportfolio.jpeg'

function Header() {
  const cvUrl = `${import.meta.env.BASE_URL}Hassan_Mezher_CV.pdf`

  return (
    <header className="pt-6">
      <div className="panel-strong rounded-[28px] px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--ring)] bg-[color:var(--accent)]/10">
              <img
                src={logoportfolio}
                alt="Logo"
                className="h-full w-full scale-[1.80] object-cover"
                loading="lazy"
              />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.55em] text-[color:var(--muted)]">Hassan Mezher</div>
              <div className="text-[12px] font-semibold text-[color:var(--ink)]">Full-stack developer</div>
            </div>
          </div>

          <nav className="scrollbar-hide flex flex-wrap items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
            {[
              ['#about', 'About'],
              ['#services', 'Services'],
              ['#projects', 'Projects'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-[color:var(--accent)]">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex w-full gap-2 sm:w-auto">
            <a
              href={cvUrl}
              download
              className="w-full rounded-full border border-[color:var(--ring)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] sm:w-auto"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="w-full rounded-full bg-[color:var(--accent)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
