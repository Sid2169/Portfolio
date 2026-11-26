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
    <article className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className={`contents lg:block ${reverse ? "lg:order-2" : ""}`}>
        <div className="order-1">
        <p className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
          <span className="text-cyan-400">{buildNumber}</span>
          <span className="h-px w-8 bg-gray-700" aria-hidden="true" />
          Featured build
        </p>
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-white [text-wrap:balance] md:text-4xl lg:text-5xl">
          {project.name}
        </h3>
        </div>
        <div className="order-3">
        <p className="max-w-2xl text-base leading-relaxed text-gray-400 lg:mt-5">
          {project.description}
        </p>

        <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-gray-800/80 pt-5 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
              Build
            </dt>
            <dd className="mt-1.5 text-sm text-gray-200">
              {buildNumber} / {totalNumber}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
              Published
            </dt>
            <dd className="mt-1.5 text-sm text-gray-200">
              {formatPublishedDate(project.publishedDate)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
              Stack
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-gray-200">
              {project.techStack.join(" · ")}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-600 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:from-cyan-300 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
          >
            Live demo
            <ExternalLinkIcon />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
            >
              Source code
              <ExternalLinkIcon />
            </a>
          )}
        </div>
        </div>
      </div>

      <div
        className={`group/browser order-2 min-w-0 w-full overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-900/60 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-gray-800/80 bg-gray-900/80 px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-green-500/70" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-md border border-gray-800 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-gray-500">
            {address}
          </span>
          <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-cyan-400">
            Live
          </span>
        </div>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video overflow-hidden bg-gray-950"
          aria-label={`Open ${project.name} live demo`}
        >
          <img
            src={project.imagePath}
            alt={`${project.name} screenshot`}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/browser:scale-[1.03]"
          />
          <span className="absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-300 group-hover/browser:opacity-100 group-focus-within/browser:opacity-100">
            <span>Open live build</span>
            <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </article>
  );
};

export default FeaturedProject;
