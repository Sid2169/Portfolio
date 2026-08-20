const Button = ({ text, className, id, targetId = "work", href, outlined = false }) => {

  // Direct link variant (e.g. Download Resume)
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${className ?? ''} cta-wrapper`}>
        <div className={`${outlined ? 'cta-button-ghost' : 'cta-button'} group`}>
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>
    )
  }

  // Scroll-to-section variant (default)
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className={`${outlined ? 'cta-button-ghost' : 'cta-button'} group`}>
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button;