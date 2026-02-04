import { useEffect } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Process from './components/Process'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    elements.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-[color:var(--ink)]">
      <Hero />
      <main className="relative">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
      </main>
      <Contact />
    </div>
  )
}

export default App
