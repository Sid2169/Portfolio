const TitleHeader = ({ title, sub, whiteTitle, cyanTitle, caption }) => {
  let whiteText = whiteTitle;
  let cyanText = cyanTitle;

  if (!whiteText && title) {
    const parts = title.split(" ");
    if (parts.length > 1) {
      cyanText = parts.pop();
      whiteText = parts.join(" ");
    } else {
      whiteText = title;
      cyanText = "";
    }
  }

  const captionText = caption || sub;

  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {whiteText && <span className="text-white">{whiteText} </span>}
        {cyanText && <span className="text-cyan-400">{cyanText}</span>}
      </h2>
      {captionText && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {captionText}
        </p>
      )}
    </div>
  );
};

export default TitleHeader;