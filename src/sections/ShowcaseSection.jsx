import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    // Animate section fade in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=50",
        },
      }
    );

    // Animate project cards
    projectRefs.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                
                {/* Project Screenshot */}
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-30">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-full border border-gray-700/50">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Live Link Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group/link hover:gap-3 transition-all duration-300"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Accent corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Link (Optional) */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Let's Work Together
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;