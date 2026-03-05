import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1, 
      ease: 'power2.inout',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center'
      }
    })
  })  

  return (
    <div id="skills" className="relative w-full py-16 md:py-20 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">My </span>
            <span className="text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Skills I bring to the table
          </p>
        </div>

        {/* Horizontal Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {techStackIcons.map((icon) => (
            <div 
              key={icon.name} 
              className="tech-card relative group"
            >
              {/* Card Background with Border */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center p-4 md:p-6 h-full min-h-[140px] md:min-h-[160px]">
                  {/* Tech Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    <TechIcon model={icon}/>
                  </div>
                  
                  {/* Tech Name */}
                  <p className="text-white text-sm md:text-base font-medium text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {icon.name}
                  </p>
                </div>

                {/* Accent corner decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack