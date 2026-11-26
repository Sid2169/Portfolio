"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuredRefs = useRef([]);
  const otherRefs = useRef([]);
  const restoreScrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const handleShowAll = () => {
    restoreScrollRef.current = window.scrollY;
    setShowAll(true);
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
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

      // Animate featured projects
      featuredRefs.current.forEach((project, index) => {
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
              delay: 0.15 * index,
              ease: "power3.out",
              scrollTrigger: {
                trigger: project,
                start: "top bottom-=100",
              },
            }
          );
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!showAll) return;

    const cards = otherRefs.current.filter(Boolean);
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [showAll]);

  useLayoutEffect(() => {
    if (!showAll || restoreScrollRef.current === null) return;

    const scrollY = restoreScrollRef.current;
    restoreScrollRef.current = null;
    window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
  }, [showAll]);

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

        {/* Featured Projects */}
        <div className="space-y-16 lg:space-y-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => (featuredRefs.current[index] = el)}
              className={index > 0 ? "border-t border-gray-800/60 pt-16 lg:pt-20" : ""}
            >
              <FeaturedProject
                project={project}
                index={index}
                total={featuredProjects.length}
                reverse={index % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* More Projects */}
        {otherProjects.length > 0 && (
          <>
            <div
              id="more-projects"
              className={
                showAll
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-24"
                  : "hidden"
              }
            >
              {otherProjects.map((project, index) => (
                <div
                  key={project.name}
                  ref={(el) => (otherRefs.current[index] = el)}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {!showAll && (
              <div className="text-center mt-12">
                <button
                  type="button"
                  onClick={handleShowAll}
                  aria-expanded={showAll}
                  aria-controls="more-projects"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
                >
                  <span>Show more projects</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-300 transition-colors duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                    {otherProjects.length}
                  </span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* View All Projects Link (Optional) */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Let&apos;s Work Together
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
