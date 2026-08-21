import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const getTechIconPath = (techName) => {
  const name = techName.toLowerCase();
  if (name.includes("react")) return "/images/logos/react.png";
  if (name.includes("next")) return "/models/nextjs-transformed.png";
  if (name.includes("node")) return "/images/logos/node.png";
  if (name.includes("typescript")) return "/images/logos/typescript.svg";
  if (name.includes("javascript")) return "/images/logos/javascript.svg";
  if (name.includes("tailwind")) return "/images/logos/tailwindcss.svg";
  if (name.includes("mongo")) return "/images/logos/mongodb.svg";
  if (name.includes("postgres")) return "/images/logos/postgresql.webp";
  if (name.includes("convex")) return "/images/logos/convex.svg";
  if (name.includes("clerk")) return "/images/logos/clerk.svg";
  if (name.includes("inngest")) return "/images/logos/inngest.svg";
  if (name.includes("claude")) return "/images/logos/claude.svg";
  if (name.includes("gemini")) return "/images/logos/gemini.svg";
  if (name.includes("sentry")) return "/images/logos/sentry.svg";
  if (name.includes("zustand")) return "/images/logos/zustand.svg";
  if (name.includes("elevenlabs")) return "/images/logos/elevenlabs.svg";
  if (name.includes("vapi")) return "/images/logos/vapi.svg";
  if (name.includes("vercel")) return "/images/logos/vercel.svg";
  if (name.includes("git")) return "/images/logos/git.svg";
  if (name.includes("three")) return "/images/logos/three.png";
  return null;
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

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
      className="relative w-full section-padding bg-black overflow-hidden"
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
            Highlights of my work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl overflow-hidden border border-gray-800/80 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  
                  {/* Project Screenshot */}
                  <img
                    src={project.imagePath}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-30">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <div className="mb-5">
                    <p
                      className={`text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 leading-relaxed ${
                        expandedCards[index] ? "" : "line-clamp-3"
                      }`}
                    >
                      {project.description}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none"
                    >
                      {expandedCards[index] ? "Show less" : "Read more"}
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${
                          expandedCards[index] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Tech Stack Badges with Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => {
                      const iconPath = getTechIconPath(tech);
                      return (
                        <div
                          key={techIndex}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          {iconPath ? (
                            <img src={iconPath} alt={tech} className="w-3.5 h-3.5 object-contain" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub Repo */}
              <div className="p-6 pt-0 relative z-30">
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold text-xs md:text-sm rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white font-medium text-xs md:text-sm rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
                      title="View GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
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