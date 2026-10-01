import NavBar from "../src/components/NavBar"
import Hero from "../src/sections/Hero"
import ShowcaseSection from "../src/sections/ShowcaseSection"
import ExperienceSection from "../src/sections/ExperienceSection"
import TechStack from "../src/sections/TechStack"
import Testimonials from "../src/sections/Testimonials"
import Contact from "../src/sections/Contact"
import Footer from "../src/sections/Footer"
import LogoSection from "../src/sections/LogoSection"

export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <ShowcaseSection />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}