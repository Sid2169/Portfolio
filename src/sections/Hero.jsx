"use client"
import dynamic from "next/dynamic"
import { words, socialImgs } from '../constants/index.js'
import  Button  from '../components/Button.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroExperience = dynamic(
  () => import('../components/HeroModels/HeroExperience.jsx'),
  { ssr: false }
)

const heroSocials = socialImgs.filter(
  ({ name }) => name === "github" || name === "linkedin"
)

const Hero = () => {

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
                        Hi, I&apos;m Siddhartha — an <strong>Applied AI Systems Engineer.</strong> <br/> I build AI-powered products that turn data into insights and automate <br/> workflows, specializing in <strong>LLMs, RAG &amp; AI agents</strong> for SaaS.
                    </p>

                    <div className="flex items-center gap-3 relative z-10">
                        {heroSocials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
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
                    <HeroExperience />
                </div>
            </figure>
        </div>

    </section>
  )
}

export default Hero