import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current, 
            {opacity: 0},
            {opacity: 1, duration: 1.5}

        )

        const projects = [project1Ref.current, project2Ref. current, project3Ref. current];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0, 
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100'
                    }
                }
            )        
        });
    }, []);
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT  */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper"><img src="/images/project1.png" alt="Aero-Weather" /></div>

                    <div className="text-content">
                        <h2>AERO-Weather: A sleek weather dashboard delivering real-time insights at a glance.</h2>
                        <p className="text-white-50 md:text-xl">
                            A weather app built with JS & Tailwind CSS that displays current conditions, forecasts, and air quality data using the WeatherAPI service.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]"><img src="/images/project2.png" alt="Capiche-Task Management" /></div>
                        <h2>Capiche - Task Management</h2>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffefdb]"><img src="/images/project3.png" alt="Gnome - Calculator" /></div>
                        <h2>Gnome Calculator</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection