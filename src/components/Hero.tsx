import Header from './Header'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[color:var(--accent)]/12 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)]/16 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[460px] -translate-x-1/2 rounded-full bg-[color:var(--accent-2)]/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-8 lg:px-12">
        <Header />
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-[color:var(--ring)] bg-[color:var(--panel)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
              Full-stack developer
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </span>
            </div>
            <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl">
              Premium digital products built for mobile-first experiences.
            </h1>
            <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[17px]">
              I design and engineer full-stack products that feel effortless on phones and scale beautifully across every
              screen size.
            </p>
            <div className="animate-fade-up delay-3 mt-7 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:w-auto"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="w-full rounded-full border border-[color:var(--ring)] bg-transparent px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:w-auto"
              >
                View Projects
              </a>
            </div>
            <div className="animate-fade-up delay-4 mt-8 grid w-full max-w-xl grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
              {['UI Systems', 'API Design', 'Product Strategy', 'Performance'].map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--panel)] px-4 py-3 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-strong rounded-[30px] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Now Building</p>
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            </div>
            <h3 className="font-display mt-4 text-2xl text-[color:var(--ink)] sm:text-3xl">
              Mobile-first products with calm, confident UX.
            </h3>
            <p className="mt-4 text-[14px] leading-7 text-[color:var(--muted)]">
              End-to-end delivery with crisp UI systems, reliable data layers, and release-ready polish.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { label: 'Delivery focus', value: 'Rapid, mobile-first execution' },
                { label: 'Systems thinking', value: 'Scalable UI + backend architecture' },
                { label: 'Collaboration', value: 'Clear, proactive communication' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 rounded-2xl border border-[color:var(--ring)] bg-[color:var(--panel)] px-4 py-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
                    {item.label}
                  </p>
                  <p className="text-[14px] font-semibold text-[color:var(--ink)]">{item.value}</p>
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
