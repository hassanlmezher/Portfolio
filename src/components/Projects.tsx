import { useState } from 'react'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'

const projects = [
  {
    id: 'shopora',
    name: 'Shopora',
    label: 'E-commerce platform',
    description:
      'An end-to-end marketplace where shoppers build carts, and aspiring sellers request admin approval to open their own storefronts and manage products.',
    highlights: [
      'Cart-first buying flow with quick add/remove actions',
      'Seller approval pipeline managed by admins',
      'Dedicated storefronts for each accepted seller',
      'Inventory controls for sellers to publish and manage items',
    ],
    images: [img1, img2, img3, img4],
  },
  {
    id: 'family-todo',
    name: 'Family To-Do App',
    label: 'Collaborative household planner',
    description:
      'A shared family list powered by invite tokens. Each member can add tasks, assign them, edit or delete items, and track whether they were bought or skipped.',
    highlights: [
      'Token-based invites to onboard family members',
      'Assign tasks to specific people with clear ownership',
      'Status controls to mark items bought or skipped',
      'Weekly rollover every Sunday with archived lists',
    ],
    images: [pic1, pic2, pic3, pic4],
  },
]

type CarouselProps = {
  images: string[]
  title: string
}

function ProjectCarousel({ images, title }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[color:var(--accent)]/18 via-transparent to-[color:var(--accent-2)]/20 blur-2xl" />
      <div className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70">
        <div
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={`${title}-image-${index}`}
              className="relative h-[220px] min-w-full flex-shrink-0 overflow-hidden sm:h-[260px] lg:h-[280px]"
            >
              <img
                src={src}
                alt={`${title} preview ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/55 via-[color:var(--ink)]/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-4 bottom-4 flex items-center gap-2 sm:top-4 sm:bottom-auto">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] shadow-[0_10px_20px_-12px_rgba(12,18,28,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          aria-label={`Scroll ${title} carousel backward`}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] shadow-[0_10px_20px_-12px_rgba(12,18,28,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          aria-label={`Scroll ${title} carousel forward`}
        >
          ›
        </button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {images.map((_, index) => (
          <button
            key={`${title}-dot-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === activeIndex ? 'bg-[color:var(--accent)]' : 'bg-[color:var(--ring)]'
            }`}
            aria-label={`Show ${title} image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12" data-reveal>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">Projects</p>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-4xl">
            Selected work that balances refinement, usability, and scalable architecture.
          </h2>
        </div>
        <p className="text-[15px] leading-7 text-[color:var(--muted)] sm:text-[16px]">
          Each build includes structured UX, thoughtful data design, and visual polish that feels premium.
        </p>
      </div>

      <div className="mt-10 grid gap-10">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="glass-card group rounded-[32px] p-5 transition-all duration-300 hover:-translate-y-1"
            data-reveal
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ring)] bg-white/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)] sm:h-12 sm:w-12">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]/70 sm:text-[12px]">
                    {project.label}
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ink)] sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[color:var(--muted)] sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-3 text-[13px] leading-6 text-[color:var(--ink-soft)] sm:text-[14px]">
                  {project.highlights.map((item) => (
                    <div key={`${project.id}-${item}`} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                <ProjectCarousel images={project.images} title={project.name} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
