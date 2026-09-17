import TitleHeader from '../components/TitleHeader'
import { testimonials, OtherLinks } from '../constants'
import GlowCard from '../components/GlowCard'
import Button from '../components/Button'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
             title="What people say about me?"
             sub="Client Feedback Highlights" />

             <div className="lg:columns-3 md:columns-2 columns-1 mt-15">
                {testimonials.map((testimonial) => (
                    <GlowCard card={testimonial}>
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={testimonial.imgPath} alt={testimonial.name} className="w-12 h-12 rounded-full object-cove" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <a href={testimonial.profileLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:underline">
                                    <p className="font-bold truncate">{testimonial.name}</p>
                                    <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                                </a>
                                <p className="text-white-50 italic">{testimonial.designation}</p>
                                <div className="mt-2">
                                    <a href={testimonial.companyLink} target="_blank" rel="noopener noreferrer" className="text-white-50 cursor-pointer hover:underline break-all">{testimonial.mentions}</a>
                                </div>
                            </div>
                        </div>
                    </GlowCard>
                ))}
             </div>

             <div className="flex-center mt-15">
                <Button
                  className="md:w-80 md:h-16 w-60 h-12"
                  text="Submit a Testimonial"
                  href={OtherLinks.submitTestimonialLink}
                />
             </div>
        </div>
    </section>
  )
}

export default Testimonials