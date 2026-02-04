import Header from './Header'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[color:var(--accent)]/20 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -right-16 top-16 h-56 w-56 rounded-full bg-[color:var(--accent-2)]/20 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[420px] -translate-x-1/2 rounded-full bg-[color:var(--accent-3)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-8 lg:px-12">
        <Header />
        <div className="grid gap-8 py-8 lg:py-16">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-[color:var(--ring)] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              Full-stack developer
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </span>
            </p>
            <h1 className="font-display animate-fade-up delay-1 mt-4 text-3xl leading-tight text-[color:var(--ink)] sm:text-5xl">
              Premium digital products built for mobile-first experiences.
            </h1>
            <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[18px]">
              I design and engineer full-stack products that feel effortless on phones and scale beautifully across every
              screen size.
            </p>
            <div className="animate-fade-up delay-3 mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="w-full rounded-full bg-[color:var(--ink)] px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent)] sm:w-auto"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="w-full rounded-full border border-[color:var(--ring)] bg-white/90 px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:w-auto"
              >
                View Projects
              </a>
            </div>
            <div className="animate-fade-up delay-4 mt-7 grid w-full max-w-lg grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              {['UI Systems', 'API Design', 'Product Strategy', 'Performance'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
