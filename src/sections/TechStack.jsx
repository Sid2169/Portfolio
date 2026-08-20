import { useRef } from 'react'
import { techCategories } from '../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {
  const containerRef = useRef(null)
  const categoryRefs = useRef([])

  useGSAP(() => {
    categoryRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.15 * index,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=80',
            },
          }
        )
      }
    })
  }, [])

  return (
    <section id="skills" ref={containerRef} className="relative w-full section-padding bg-black overflow-hidden">
      {/* Ambient Glow Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-cyan-400">Skills & Stack</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive breakdown of my engineering capabilities, frameworks & AI integrations
          </p>
        </div>

        {/* Categorized Tech Stack Grid (2x2 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {techCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              ref={(el) => (categoryRefs.current[catIndex] = el)}
              className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-6 md:p-8 border border-gray-800/80 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10">{cat.icon}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm font-medium text-gray-200 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:scale-[1.03] transition-all duration-300"
                    >
                      {skill.iconPath ? (
                        <img src={skill.iconPath} alt={skill.name} className="w-4 h-4 object-contain" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack