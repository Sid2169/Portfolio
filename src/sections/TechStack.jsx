"use client"
import { useRef } from 'react'
import { techCategories, corePrimaryStack, appliedAIStack } from '../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {
  const containerRef = useRef(null)
  const categoryRefs = useRef([])
  const coreRef = useRef(null)
  const supportingRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
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

    if (coreRef.current) {
      gsap.fromTo(
        coreRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: coreRef.current,
            start: 'top bottom-=80',
          },
        }
      )
    }

    if (supportingRef.current) {
      gsap.fromTo(
        supportingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: supportingRef.current,
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
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-cyan-400">Skills & Stack</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Categorized breakdown of daily production core technologies and supporting ecosystem tools
          </p>
        </div>

        {/* PRIMARY CORE STACK HIGHLIGHT BANNER */}
        <div 
          ref={coreRef}
          className="mb-10 bg-gradient-to-r from-cyan-950/40 via-gray-900/60 to-purple-950/40 rounded-2xl p-6 md:p-8 border border-cyan-500/30 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>⭐</span> Primary Core Stack & Daily Drivers
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Core Competencies
              </h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm max-w-md">
              Primary production frameworks & languages used for core application architecture.
            </p>
          </div>

          {/* Primary Stack */}
          <div className="mb-8">
            <h4 className="text-sm md:text-base font-semibold text-cyan-400 uppercase tracking-wider mb-4 text-center">
              Primary Stack
            </h4>
            <div className="grid grid-cols-[repeat(2,minmax(0,10rem))] md:grid-cols-[repeat(5,minmax(0,10rem))] justify-center gap-3">
              {corePrimaryStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-3.5 rounded-xl bg-black/60 border border-cyan-500/20 hover:border-cyan-400 flex flex-col items-center text-center gap-2 transition-all hover:scale-105 group"
                >
                  {tech.iconPath ? (
                    <img src={tech.iconPath} alt={tech.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    </span>
                  )}
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold group-hover:text-cyan-400 transition-colors">{tech.name}</p>
                    <span className="text-[10px] text-cyan-400/80 font-medium block">{tech.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applied AI Engineering */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-cyan-400 uppercase tracking-wider mb-4 text-center">
              Applied AI Engineering
            </h4>
            <div className="grid grid-cols-[repeat(2,minmax(0,10rem))] md:grid-cols-[repeat(4,minmax(0,10rem))] justify-center gap-3">
              {appliedAIStack.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-black/60 border border-cyan-500/20 hover:border-cyan-400 flex flex-col items-center text-center gap-2 transition-all hover:scale-105 group"
                >
                  {skill.iconPaths ? (
                    <span className="h-8 flex items-center gap-1">
                      {skill.iconPaths.map((path) => (
                        <img key={path} src={path} alt={skill.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                      ))}
                    </span>
                  ) : skill.iconPath ? (
                    <img src={skill.iconPath} alt={skill.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    </span>
                  )}
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold group-hover:text-cyan-400 transition-colors">{skill.name}</p>
                    <span className="text-[10px] text-cyan-400/80 font-medium block">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Technologies Heading */}
        <div ref={supportingRef} className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">Supporting </span>
            <span className="text-cyan-400">Technologies & Ecosystem</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Broader tools, libraries, and platforms I bring in to support core application architecture
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