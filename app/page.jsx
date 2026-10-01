import NavBar from "../src/components/NavBar"
import Hero from "../src/sections/Hero"
import ShowcaseSection from "../src/sections/ShowcaseSection"
import ExperienceSection from "../src/sections/ExperienceSection"
import TechStack from "../src/sections/TechStack"
import Testimonials from "../src/sections/Testimonials"
import Contact from "../src/sections/Contact"
import Footer from "../src/sections/Footer"
import LogoSection from "../src/sections/LogoSection"
import { getTestimonials } from "../src/lib/testimonials"

export default async function Page() {
  // Resolved on the server so the testimonial cards are in the initial HTML.
  // Without this the section renders the bundled testimonials first and grows
  // once the client fetch lands, pushing everything below it down.
  const initialTestimonials = await getTestimonials()

  return (
    <>
      <NavBar />
      <Hero />
      {/* <LogoSection /> */}
      <ShowcaseSection />
      <ExperienceSection />
      <TechStack />
      <Testimonials initialTestimonials={initialTestimonials} />
      <Contact />
      <Footer />
    </>
  )
}