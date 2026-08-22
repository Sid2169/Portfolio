import { words } from '../constants/index.js'
import  Button  from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

  useGSAP(() => {
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
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
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

                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm from India — a <strong>Full-Stack Web Dev</strong> specializing in  —  <br/>  <strong>Next.js, TypeScript, Node.js, and AI integration. </strong>
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my work"
                      />
                      <Button
                        className="md:w-80 md:h-16 w-60 h-12"
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