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
          target.scrollIntoView({ behavior: 'smooth', block: 'start'});
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