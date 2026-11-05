"use client"
import { useState } from "react"
import { words, socialImgs } from '../constants/index.js'
import  Button  from '../components/Button.jsx'
import HeroScene from '../components/HeroModels/HeroScene.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const heroSocials = socialImgs.filter(
  ({ name }) => name === "github" || name === "linkedin"
)

const Hero = () => {
  const [introExpanded, setIntroExpanded] = useState(false)

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo( '.hero-text h1',
          {
              y: 50,
              opacity: 0
          },
          {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 1, 
              ease: 'power2.inOut'
          }
      )
    })
  })  
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-0">
            <img src="/images/bg.webp" alt="background"/>
        </div>

        <div className="hero-layout">
            {/*LEFT: HERO CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>I build
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2 whitespace-nowrap">
                                            <img 
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>

                                            <span>{word.text}</span>

                                        </span>   
                                    ))}
                                </span>
                            </span>
                        </h1>                       
                    </div>

                    <p className="text-white/75 md:text-xl relative z-10 pointer-events-none">
                        Hi, I&apos;m Siddhartha — an <strong>Applied AI Systems Engineer.</strong> <br className="hidden md:inline" /> I build AI-powered products that
                        <span className="hidden md:inline"> turn data into insights and<br/>automate workflows</span>
                        {!introExpanded && <span aria-hidden="true">...</span>}
                        <span id="hero-intro-details" hidden={!introExpanded}>
                            <span className="hidden md:inline">, specializing in <strong>LLMs, RAG &amp; AI agents</strong> for SaaS. <br/> At Cosminder Solutions, I build applied AI and ML systems <br/> that turn financial data and market signals into forecasting, <br/> recommendations, and risk insights for SaaS products.</span>
                            <span className="md:hidden"> turn data into insights and automate workflows, specializing in <strong>LLMs, RAG &amp; AI agents</strong> for SaaS. At Cosminder Solutions, I build applied AI and ML systems that turn financial data and market signals into forecasting, recommendations, and risk insights for SaaS products.</span>
                        </span>
                        {" "}
                        <button
                            type="button"
                            onClick={() => setIntroExpanded((prev) => !prev)}
                            aria-expanded={introExpanded}
                            aria-controls="hero-intro-details"
                            className="pointer-events-auto relative z-20 appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer whitespace-nowrap italic font-medium text-white/75 underline decoration-solid decoration-1 underline-offset-4 decoration-white/30 [font-family:inherit] [font-size:inherit] [line-height:inherit] [-webkit-tap-highlight-color:transparent] hover:text-white hover:decoration-white/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
                        >
                            {introExpanded ? "Read less" : "Read more"}
                        </button>
                    </p>

                    <div className="flex items-center gap-3 relative z-10">
                        {heroSocials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener"
                                aria-label={`${social.name === "github" ? "GitHub" : "LinkedIn"} profile`}
                                className="group w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                            >
                                <img
                                    src={social.imgPath}
                                    alt=""
                                    className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                                />
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="md:w-80 md:h-16 w-full h-12"
                        id="button"
                        text="See my work"
                      />
                      <Button
                        className="md:w-80 md:h-16 w-full h-12"
                        text="View Resume"
                        href="/resume.pdf"
                        outlined
                      />
                    </div>
                </div>
            </header>
            {/*RIGHT: 3D MODEL */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroScene />
                </div>
            </figure>
        </div>

    </section>
  )
}

export default Hero