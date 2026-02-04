function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-8 lg:px-12" data-reveal>
      <div className="panel-strong relative overflow-hidden rounded-[30px] p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-24 top-8 h-48 w-48 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-8 h-48 w-48 rounded-full bg-[color:var(--accent-2)]/18 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">About</p>
            <h2 className="font-display mt-4 text-3xl text-[color:var(--ink)] sm:text-4xl">
              Detail-first UI, engineered for small screens.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
              I specialize in mobile-first products that feel smooth and intentional. Every layout is designed to
              prioritize clarity, speed, and confident interaction.
            </p>
            <div className="mt-6 grid gap-3 text-[13px] leading-6 text-[color:var(--ink-soft)]">
              {[
                'Responsive UI systems tailored for mobile-first experiences',
                'Clean interaction design that keeps user attention focused',
                'Reliable engineering with scalable, maintainable codebases',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Based', value: 'Lebanon · Remote worldwide' },
              { label: 'Focus', value: 'Mobile UX + scalable systems' },
              { label: 'Values', value: 'Clarity, polish, reliability' },
              { label: 'Style', value: 'Crisp layouts, calm motion' },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-[color:var(--ring)] bg-[color:var(--panel)] px-4 py-4"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  {card.label}
                </p>
                <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
