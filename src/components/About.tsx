function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:px-12" data-reveal>
      <div className="grid gap-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[color:var(--muted)]">About</p>
        <h2 className="font-display text-4xl text-[color:var(--ink)] sm:text-5xl">Quiet confidence.</h2>
        <p className="mx-auto max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          I build sleek, mobile-first experiences with cinematic spacing, confident motion, and durable architecture.
        </p>
      </div>

      <div className="relative mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-center">
        <div className="soft-card w-full max-w-xs px-5 py-6 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-black/60">01 / Focus</p>
          <p className="mt-3 text-[15px] font-semibold text-black">Mobile UI with strong visual rhythm.</p>
          <p className="mt-3 text-[13px] text-black/70">Layouts that feel composed and effortless to navigate.</p>
        </div>

        <div className="glass-card w-full max-w-sm px-6 py-7 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">02 / Value</p>
          <p className="mt-3 text-[16px] font-semibold text-[color:var(--ink)]">Detail-first execution.</p>
          <p className="mt-3 text-[13px] text-[color:var(--ink-soft)]">
            I obsess over hierarchy, typography, and motion so the product feels premium on every screen.
          </p>
          <div className="mt-4 h-[2px] w-12 bg-[color:var(--accent)]" />
        </div>

        <div className="soft-card w-full max-w-xs px-5 py-6 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-black/60">03 / Service</p>
          <p className="mt-3 text-[15px] font-semibold text-black">Clear communication.</p>
          <p className="mt-3 text-[13px] text-black/70">Short loops, honest updates, and a consistent pace.</p>
        </div>
      </div>
    </section>
  )
}

export default About
