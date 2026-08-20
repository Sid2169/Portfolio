import { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
        };

        handleScroll() //Initial Check
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },  [])

    return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">Siddhartha</a>

            <nav className="desktop">
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className="group">
                            {name === "Resume" ? (
                                <a href={link} download="Siddhartha_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <span>{name}</span>
                                    <span className="underline" />
                                 </a>
                                ) : (
                                 <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <a href="#contact" className="contact-btn group hidden sm:flex">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'}`} />
                    <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100 my-0.5'}`} />
                    <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-1'}`} />
                </button>
            </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-full mt-3 mx-4 p-6 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-6 animate-fadeIn">
                <ul className="flex flex-col gap-4">
                    {navLinks.map(({ link, name }) => (
                        <li key={name} onClick={() => setIsOpen(false)}>
                            {name === "Resume" ? (
                                <a href={link} download="Siddhartha_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg text-white-50 hover:text-cyan-400 transition-colors block font-medium">
                                    {name}
                                </a>
                            ) : (
                                <a href={link} className="text-lg text-white-50 hover:text-cyan-400 transition-colors block font-medium">
                                    {name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                <a href="#contact" onClick={() => setIsOpen(false)} className="contact-btn group w-full">
                    <div className="inner w-full text-center py-3">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        )}
    </header>
  )
}

export default NavBar