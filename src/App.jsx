import { lazy, Suspense } from "react"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"))
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"))
const TechStack = lazy(() => import("./sections/TechStack"))
const Testimonials = lazy(() => import("./sections/Testimonials"))
const Contact = lazy(() => import("./sections/Contact"))
const Footer = lazy(() => import("./sections/Footer"))

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Suspense fallback={null}>
        <ShowcaseSection />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App