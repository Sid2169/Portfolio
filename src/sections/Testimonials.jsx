"use client"
import TitleHeader from '../components/TitleHeader'
import { testimonials as fallbackTestimonials, OtherLinks } from '../constants'
import GlowCard from '../components/GlowCard'
import Button from '../components/Button'

const getInitials = (name) =>
  (name || '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || '')
    .join('') || '?'

const Testimonials = ({ initialTestimonials }) => {
  // Rendered straight from props with no client fetch on top. The list the
  // server rendered is therefore the list the browser keeps, so this section
  // has a fixed height and never pushes the sections below it down.
  const testimonialList = initialTestimonials?.length
    ? initialTestimonials
    : fallbackTestimonials

  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
             title="What people say about me?"
             sub="Client Feedback Highlights" />

             <div className="lg:columns-3 md:columns-2 columns-1 mt-15">
                {testimonialList.map((testimonial, index) => (
                    <GlowCard key={testimonial.id || testimonial.profileLink || `${testimonial.name}-${index}`} card={testimonial}>
                        <div className="flex items-center gap-3">
                            <div>
                                {testimonial.profileLink ? (
                                    <a href={testimonial.profileLink} target="_blank" rel="noopener noreferrer" aria-label={`${testimonial.name} on LinkedIn`} className="inline-block cursor-pointer">
                                        {testimonial.imgPath ? (
                                            <img src={testimonial.imgPath} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-black-200 flex items-center justify-center text-white-50 font-bold text-lg" aria-hidden="true">
                                                {getInitials(testimonial.name)}
                                            </div>
                                        )}
                                    </a>
                                ) : (
                                    <>
                                        {testimonial.imgPath ? (
                                            <img src={testimonial.imgPath} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-black-200 flex items-center justify-center text-white-50 font-bold text-lg" aria-hidden="true">
                                                {getInitials(testimonial.name)}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                {testimonial.profileLink ? (
                                    <a href={testimonial.profileLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:underline">
                                        <p className="font-bold truncate">{testimonial.name}</p>
                                        <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <p className="font-bold truncate">{testimonial.name}</p>
                                )}
                                {testimonial.designation && <p className="text-white-50 italic">{testimonial.designation}</p>}
                                <div className="mt-2">
                                    {testimonial.mentions && (
                                        testimonial.companyLink ? (
                                            <a href={testimonial.companyLink} target="_blank" rel="noopener noreferrer" className="text-white-50 cursor-pointer hover:underline break-all">@{testimonial.mentions.replace(/^@/, '')}</a>
                                        ) : (
                                            <p className="text-white-50 break-all">@{testimonial.mentions.replace(/^@/, '')}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </GlowCard>
                ))}
             </div>

             <div className="flex-center mt-15">
                <Button
                  className="md:w-96 md:h-16 w-full h-12"
                  text="Submit a Testimonial"
                  href={OtherLinks.submitTestimonialLink}
                />
             </div>
        </div>
    </section>
  )
}

export default Testimonials