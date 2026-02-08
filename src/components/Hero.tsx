import Header from './Header'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-32 h-[520px] bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center font-display text-[clamp(3.5rem,18vw,16rem)] leading-none text-white/5">
        HASSAN
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-8 lg:px-12">
        <Header />
        <div className="grid gap-10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--ring)] bg-[color:var(--panel)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-[color:var(--ink-soft)]">
              Dreaming in Product
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            </div>
            <h1 className="font-display text-4xl text-[color:var(--ink)] sm:text-6xl">
              Elegance in motion.
            </h1>
            <p className="max-w-xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[17px]">
              Full-stack products with cinematic polish. I blend refined UI, confident motion, and stable systems.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-2)] sm:w-auto"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="w-full rounded-full border border-[color:var(--ring)] px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] sm:w-auto"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
