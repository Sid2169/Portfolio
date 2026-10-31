"use client"
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { socialImgs } from "../constants";
import { useSmoothScroll } from "../components/SmoothScroll";

const Contact = () => {
  const { stop: stopScroll, start: startScroll } = useSmoothScroll();
  const formRef = useRef(null);
  const lightboxRef = useRef(null);
  const lightboxCloseRef = useRef(null);
  const profileTriggerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "siddharthasingh21109572@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setSubmitError("");
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errors.message = "Please enter a message.";
    return errors;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setSubmitError("");
    setSubmitted(false);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstInvalid = Object.keys(errors)[0];
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError(
        "Sorry, your message couldn't be sent. Please try again, or email me directly."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isImageOpen) return;

    stopScroll();

    const trigger = profileTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = requestAnimationFrame(() => lightboxCloseRef.current?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = lightboxRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      startScroll();
      trigger?.focus();
    };
  }, [isImageOpen, stopScroll, startScroll]);

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or opportunities? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16 gap-8">

          {/* LEFT: PERSONAL PROFILE & DIRECT CONTACT CARD */}
          <div className="xl:col-span-6">
            <div className="card-border rounded-xl p-8 md:p-10 h-full flex flex-col justify-between gap-8 bg-black-100/40">
              
              {/* TOP: PROFILE HEADER & AVAILABILITY STATUS BADGE */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    ref={profileTriggerRef}
                    role="button"
                    tabIndex={0}
                    aria-label="View profile photo"
                    aria-haspopup="dialog"
                    className="relative group cursor-pointer shrink-0 rounded-full"
                    onClick={() => setIsImageOpen(true)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsImageOpen(true);
                      }
                    }}
                    title="Click to enlarge photo"
                  >
                    <img 
                      src="/images/siddhartha.webp" 
                      alt="Siddhartha Suman" 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/50 object-cover shadow-lg group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-cyan-400/25 transition-all duration-300"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Siddhartha Suman</h3>
                    <p className="text-sm text-cyan-400 font-medium">Applied AI Systems Engineer</p>
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
              {/* SOCIAL PROFILES */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
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

              {/* MIDDLE: DIRECT EMAIL BOX WITH ACTION BUTTONS */}
              <div className="p-5 rounded-xl bg-[#1c1c21] border border-white/10 flex flex-col gap-4">
                <div className="min-w-0 overflow-x-auto">
                  <p className="text-xs text-white-50 font-medium uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-white hover:text-cyan-400 transition-colors font-mono text-sm md:text-base font-semibold whitespace-nowrap inline-block"
                  >
                    {emailAddress}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="group flex items-center gap-2 p-2.5 pr-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 shrink-0 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 active:scale-95 transition-all"
                    title={`Open your email app to write to ${emailAddress}`}
                    aria-label={`Open email app to write to ${emailAddress}`}
                  >
                    <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="text-xs font-bold whitespace-nowrap">Email Me</span>
                    <svg className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>

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
              </div>

              {/* BOTTOM: LOCATION & SOCIAL PROFILES */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-white-50 text-sm">
                  <span className="text-lg">📍</span>
                  <span>Based in <strong>India</strong> — Open for Remote, Hybrid, & Relocation</span>
                </div>

                
              </div>

            </div>
          </div>
          {/* RIGHT: CONTACT FORM */}
          <div className="xl:col-span-6">
            <div className="flex-center card-border rounded-xl p-8 md:p-10 h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
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
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={`w-full p-4 rounded-lg bg-[#1c1c21] border text-white focus:outline-none transition-colors ${
                      fieldErrors.name
                        ? "border-red-400/70 focus:border-red-400"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
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
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={`w-full p-4 rounded-lg bg-[#1c1c21] border text-white focus:outline-none transition-colors ${
                      fieldErrors.email
                        ? "border-red-400/70 focus:border-red-400"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
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
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    className={`w-full p-4 rounded-lg bg-[#1c1c21] border text-white focus:outline-none transition-colors resize-none ${
                      fieldErrors.message
                        ? "border-red-400/70 focus:border-red-400"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {submitted && (
                  <div role="status" aria-live="polite" className="text-emerald-400 text-sm font-medium text-center">
                    ✓ Message sent successfully!
                  </div>
                )}

                {submitError && (
                  <div role="alert" aria-live="assertive" className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300 text-center">
                    {submitError}{" "}
                    <a href={`mailto:${emailAddress}`} className="font-semibold underline hover:text-red-200">
                      {emailAddress}
                    </a>
                  </div>
                )}
                <button type="submit" disabled={loading}>
                  <div className={`cta-button group w-full justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
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

          
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR ENLARGED PROFILE IMAGE */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setIsImageOpen(false)}
        >
          <div 
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            aria-describedby="lightbox-description"
            className="relative max-w-md w-full bg-[#1c1c21] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={lightboxCloseRef}
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-all z-10"
              aria-label="Close profile photo"
              title="Close"
            >
              ✕
            </button>
            <img
              src="/images/siddhartha.webp"
              alt="Siddhartha Suman"
              className="w-full max-h-[70vh] object-cover rounded-xl border border-white/10"
            />
            <div className="text-center pb-2">
              <h4 id="lightbox-title" className="text-xl font-bold text-white">Siddhartha Suman</h4>
              <p id="lightbox-description" className="text-sm text-cyan-400 font-medium">Applied AI Systems Engineer</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;