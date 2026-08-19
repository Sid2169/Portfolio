const TechIcon = ({ model }) => {
  return (
    <img
      src={model.modelPath}
      alt={model.name}
      className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
    />
  )
}

export default TechIcon