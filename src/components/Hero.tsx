import Header from './Header'
import heroImage from '../images/img1.jpeg'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[color:var(--accent)]/15 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/20 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--accent-3)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-12 sm:px-8 lg:px-12">
        <Header />
        <div className="grid items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-16">
          <div className="relative">
            <p className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-[color:var(--ring)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              Full-stack developer
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </span>
            </p>
            <h1 className="font-display animate-fade-up delay-1 mt-6 text-4xl text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
              Crafting digital products that feel premium, fast, and unmistakably clear.
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-[16px] leading-7 text-[color:var(--muted)] sm:text-[18px]">
              I build thoughtful full-stack experiences for ambitious teams — from polished UI systems to dependable
              backend workflows.
            </p>
            <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent)]"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="rounded-full border border-[color:var(--ring)] bg-white/90 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                View Projects
              </a>
            </div>
            <div className="animate-fade-up delay-4 mt-10 grid max-w-md grid-cols-2 gap-4 text-[12px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
                UI Systems
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
                API Design
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
                Product Strategy
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3">
                Performance
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] border border-white/60 bg-white/30 shadow-[0_40px_90px_-65px_rgba(12,18,28,0.5)]" />
            <div className="glass-card-strong relative overflow-hidden rounded-[32px] p-5">
              <div className="absolute inset-0 grid-dots opacity-40" />
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Featured project preview"
                  className="h-[280px] w-full rounded-[24px] object-cover sm:h-[340px]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                  Latest Case Study
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                      Focus
                    </p>
                    <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">
                      Conversion-led experiences
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                      Stack
                    </p>
                    <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">
                      React, Node, Supabase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
