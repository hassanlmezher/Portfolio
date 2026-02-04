function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-8 lg:px-12" data-reveal>
      <div className="glass-card-strong relative overflow-hidden rounded-[30px] p-5 sm:p-8">
        <div className="pointer-events-none absolute -left-20 top-6 h-44 w-44 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-6 h-44 w-44 rounded-full bg-[color:var(--accent-2)]/18 blur-3xl" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">About</p>
            <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
              Detail-first UI, engineered for small screens.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              I specialize in mobile-first products that feel smooth and intentional. Every layout is designed to
              prioritize clarity, speed, and confident interaction.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Based</p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">Lebanon · Remote worldwide</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Focus</p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">Mobile UX + scalable systems</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Values</p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">Clarity, polish, reliability</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.35)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Style</p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">Crisp layouts, calm motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
