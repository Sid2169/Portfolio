import styles from "./FeaturedProject.module.css";

const formatPublishedDate = (value) => {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const ExternalLinkIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const FeaturedProject = ({ project, index, total, reverse = false }) => {
  const address = project.liveLink?.replace(/^https?:\/\//, "") ?? "";
  const buildNumber = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article className={`${styles.panel} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.content}>
        <div className={styles.heading}>
        <p className={`${styles.eyebrow} font-mono text-gray-500`}>
          <span className="text-cyan-400">{buildNumber}</span>
          <span className="h-px w-8 bg-gray-700" aria-hidden="true" />
          Featured build
        </p>
        <h3 className={`${styles.title} text-white`}>
          {project.name}
        </h3>
        </div>
        <div className={styles.details}>
        <p className={`${styles.description} text-gray-400`}>
          {project.description}
        </p>

        <dl className={styles.meta}>
          <div>
            <dt className="font-mono text-gray-500">
              Build
            </dt>
            <dd className="text-gray-200">
              {buildNumber} / {totalNumber}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-gray-500">
              Published
            </dt>
            <dd className="text-gray-200">
              {formatPublishedDate(project.publishedDate)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-gray-500">
              Stack
            </dt>
            <dd className="text-gray-200">
              {project.techStack.join(" · ")}
            </dd>
          </div>
        </dl>

        <div className={styles.actions}>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black transition-all duration-300 hover:from-cyan-300 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
          >
            Live demo
            <ExternalLinkIcon />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
            >
              Source code
              <ExternalLinkIcon />
            </a>
          )}
        </div>
        </div>
      </div>

      <div
        className={`${styles.browser} group/browser border-gray-800/80 bg-gray-900/60 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-[3px] hover:border-cyan-500/40`}
      >
        <div className={`${styles.bar} border-gray-800/80 bg-gray-900/80`}>
          <span className={styles.dots} aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-green-500/70" />
          </span>
          <span className={`${styles.address} border-gray-800 bg-black/40 font-mono text-gray-500`}>
            {address}
          </span>
          <span className={`${styles.badge} border-cyan-500/30 bg-cyan-500/10 font-mono text-cyan-400`}>
            Live
          </span>
        </div>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.screen} bg-gray-950`}
          aria-label={`Open ${project.name} live demo`}
        >
          <img
            src={project.imagePath}
            alt={`${project.name} screenshot`}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/browser:scale-[1.03]"
          />
          <span className={`${styles.overlay} bg-gradient-to-t from-black/70 via-transparent to-transparent font-mono text-white opacity-0 transition-opacity duration-300 group-hover/browser:opacity-100 group-focus-within/browser:opacity-100`}>
            <span>Open live build</span>
            <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </article>
  );
};

export default FeaturedProject;
