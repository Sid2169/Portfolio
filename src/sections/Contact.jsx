import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { socialImgs } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "siddharthasingh21109572@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or opportunities? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16 gap-8">
          {/* LEFT: CONTACT FORM */}
          <div className="xl:col-span-6">
            <div className="flex-center card-border rounded-xl p-8 md:p-10 h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-white-50 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="w-full p-4 rounded-lg bg-[#1c1c21] border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white-50 text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="w-full p-4 rounded-lg bg-[#1c1c21] border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white-50 text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full p-4 rounded-lg bg-[#1c1c21] border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group w-full justify-center">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: PERSONAL PROFILE & DIRECT CONTACT CARD */}
          <div className="xl:col-span-6">
            <div className="card-border rounded-xl p-8 md:p-10 h-full flex flex-col justify-between gap-8 bg-black-100/40">
              
              {/* TOP: PROFILE HEADER & AVAILABILITY STATUS BADGE */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/images/siddhartha.jpg" 
                    alt="Siddhartha Suman" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/50 object-cover shadow-lg shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Siddhartha Suman</h3>
                    <p className="text-sm text-cyan-400 font-medium">Full-Stack Software Engineer</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Available for Full-Time Roles & Relocation
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  Direct Communication Channels
                </h4>
                <p className="text-white-50 text-sm md:text-base leading-relaxed">
                  Prefer direct emails over web forms? Feel free to copy my email address or reach out through my active professional profiles below.
                </p>
              </div>

              {/* MIDDLE: DIRECT EMAIL BOX WITH COPY BUTTON */}
              <div className="p-5 rounded-xl bg-[#1c1c21] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-white-50 font-medium uppercase tracking-wider">Direct Email</p>
                    <a 
                      href={`mailto:${emailAddress}`}
                      className="text-white hover:text-cyan-400 transition-colors font-mono text-sm md:text-base font-semibold truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all shrink-0 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓ Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>📋 Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* BOTTOM: LOCATION & SOCIAL PROFILES */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-white-50 text-sm">
                  <span className="text-lg">📍</span>
                  <span>Based in <strong>India</strong> — Open for Remote, Hybrid, & Relocation</span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <span className="text-xs uppercase tracking-wider text-white-50 font-medium">Connect:</span>
                  <div className="flex items-center gap-3">
                    {socialImgs.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#1c1c21] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/50 transition-all group"
                      >
                        <img 
                          src={social.imgPath} 
                          alt={social.name} 
                          className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;