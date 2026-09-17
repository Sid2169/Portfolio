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

                            <div>
                                <a href={testimonial.profileLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{testimonial.name}</a>
                                <p className="text-white-50">{testimonial.designation}</p>
                                <p className="text-white-50">{testimonial.mentions}</p>
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