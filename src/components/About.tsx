import portrait from '../images/img2.jpeg'

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="glass-card-strong relative overflow-hidden rounded-[32px] p-5">
          <div className="absolute inset-0 grid-dots opacity-30" />
          <div className="relative">
            <img
              src={portrait}
              alt="Hassan Mezher"
              className="h-[280px] w-full rounded-[24px] object-cover sm:h-[360px]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-4 shadow-[0_20px_45px_-35px_rgba(12,18,28,0.45)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Based in Lebanon
              </p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">
                Building globally with remote-ready workflows.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">About</p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            Building products with taste, precision, and dependable engineering.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
            I focus on crafting digital experiences that look sharp and feel effortless. My work blends elegant UI
            systems, clear information architecture, and backend foundations that scale without surprises.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--ring)] bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Core Values
              </p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">Clarity, polish, consistency.</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--ring)] bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Collaboration
              </p>
              <p className="mt-2 text-[14px] font-semibold text-[color:var(--ink)]">
                Transparent updates and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
