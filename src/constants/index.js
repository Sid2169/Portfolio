const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Resume",
    link: "/resume.pdf",
  },
];

const words = [
  { text: "AI Agents",   imgPath: "/images/logos/ai-agents-dark.svg" },
  { text: "RAG Apps",    imgPath: "/images/logos/rag-dark.svg" },
  { text: "LLM Apps",    imgPath: "/images/logos/claude-dark.svg" },
  { text: "ML Models",   imgPath: "/images/logos/python.svg" },
  { text: "AI Search",   imgPath: "/images/logos/qdrant.svg" },
  { text: "Voice AI",    imgPath: "/images/logos/elevenlabs-dark.svg" },
  { text: "Workflows",   imgPath: "/images/logos/langgraph-dark.svg" },
  { text: "SaaS Apps",   imgPath: "/images/logos/nextjs-dark.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const techStackImgs = [
  {
    name: "React & TypeScript",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Angular Developer",
    imgPath: "/images/logos/angular.png",
  },
  {
    name: "Backend (Node & Express)",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "PostgreSQL Database",
    imgPath: "/images/logos/postgresql.png",
  },
  {
    name: "Git & GitHub",
    imgPath: "/images/logos/git.svg",
  },
];


const appliedAIStack = [
  { name: "LLM APIs (Claude, Gemini, OpenAI)", level: "Provider APIs", iconPaths: ["/images/logos/claude.svg", "/images/logos/gemini.svg", "/images/logos/openai.svg"] },
  { name: "RAG", level: "Retrieval Pipeline", iconPath: "/images/logos/rag.svg" },
  { name: "AI Agents", level: "Agentic Workflows", iconPath: "/images/logos/ai-agents.svg" },
  { name: "MCP", level: "Tool Protocol", iconPath: "/images/logos/mcp.svg" },
  { name: "Embeddings", level: "Semantic Vectors", iconPath: "/images/logos/embeddings.svg" },
  { name: "Hybrid Search", level: "Dense + Sparse", iconPath: "/images/logos/hybrid-search.svg" },
  { name: "Reranking", level: "Result Refinement", iconPath: "/images/logos/reranking.svg" },
  { name: "LLM Evaluation", level: "Quality & Metrics", iconPath: "/images/logos/llm-evaluation.svg" },
];

const corePrimaryStack = [
  { name: "TypeScript", level: "Primary Language", iconPath: "/images/logos/typescript.svg" },
  { name: "React", level: "UI Library", iconPath: "/images/logos/react.png" },
  { name: "Next.js (App Router)", level: "Primary Framework", iconPath: "/images/logos/nextjs-light.svg" },
  { name: "Node.js", level: "Runtime", iconPath: "/images/logos/node.png" },
  { name: "Express.js", level: "API Framework", iconPath: "/images/logos/express-light.svg" },
  { name: "PostgreSQL", level: "Database Core", iconPath: "/images/logos/postgresql.webp" },
  { name: "Python", level: "AI/ML Language", iconPath: "/images/logos/python.svg" },
  { name: "LangChain", level: "LLM Framework / RAG", iconPath: "/images/logos/langchain.svg" },
  { name: "LangGraph", level: "Agent Orchestration", iconPath: "/images/logos/langgraph.svg" },
  { name: "pgVector", level: "Postgres Vector Search", iconPath: "/images/logos/postgresql.webp" },
];

const techCategories = [
  {
    title: "Frontend",
    icon: "💻",
    description: "Server Components, Server Actions & State Management",
    skills: [
      { name: "Server Components", iconPath: "/images/logos/react.png" },
      { name: "Server Actions", iconPath: "/images/logos/react.png" },
      { name: "Tailwind CSS", iconPath: "/images/logos/tailwindcss.svg" },
      { name: "Zustand", iconPath: "/images/logos/zustand.svg" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "⚙️",
    description: "APIs, Relational, NoSQL & Vector Databases",
    skills: [
      { name: "MongoDB", iconPath: "/images/logos/mongodb.svg" },
      { name: "Mongoose", iconPath: "/images/logos/mongodb.svg" },
      { name: "Convex", iconPath: "/images/logos/convex.svg" },
      { name: "Redis", iconPath: "/images/logos/redis.svg" },
      { name: "Qdrant", iconPath: "/images/logos/qdrant.svg" },
      { name: "pytest", iconPath: "/images/logos/pytest.svg" },
    ],
  },
  {
    title: "AI & Realtime",
    icon: "🧠",
    description: "LLM APIs, Voice AI & Background Queues",
    skills: [
      { name: "Anthropic Claude API", iconPath: "/images/logos/claude.svg" },
      { name: "Vercel AI SDK", iconPath: "/images/logos/vercel.svg" },
      { name: "Google Gemini API", iconPath: "/images/logos/gemini.svg" },
      { name: "Vapi", iconPath: "/images/logos/vapi.svg" },
      { name: "ElevenLabs", iconPath: "/images/logos/elevenlabs.svg" },
      { name: "Inngest", iconPath: "/images/logos/inngest.svg" },
      { name: "RAGAS", iconPath: "/images/logos/ragas.svg" },
      { name: "LangSmith", iconPath: "/images/logos/langsmith.svg" },
    ],
  },
  {
    title: "Platform & Tooling",
    icon: "🛠️",
    description: "DevOps, Authentication & Monitoring",
    skills: [
      { name: "Vercel", iconPath: "/images/logos/vercel.svg" },
      { name: "Clerk", iconPath: "/images/logos/clerk.svg" },
      { name: "Docker", iconPath: "/images/logos/docker.svg" },
      { name: "Git & GitHub", iconPath: "/images/logos/git.svg" },
      { name: "Webpack", iconPath: "/images/logos/webpack.svg" },
      { name: "Jest", iconPath: "/images/logos/jest.svg" },
      { name: "OpenTelemetry", iconPath: "/images/logos/opentelemetry.svg" },
      { name: "Sentry", iconPath: "/images/logos/sentry.svg" },
    ],
  },
];

const techStackIcons = [
  {
    name: "Next JS",
    modelPath: "/models/nextjs-transformed.png",
  },
  {
    name: "React",
    modelPath: "/images/logos/react.png",
  },
  {
    name: "Three JS",
    modelPath: "/images/logos/three.png",
  },
  {
    name: "Backend with Node",
    modelPath: "/images/logos/node.png",
  },
  {
    name: "PostgreSQL Database",
    modelPath: "/images/logos/postgresql.webp",
  },
  {
    name: "Git & GitHub",
    modelPath: "/images/logos/git.svg",
  },
  {
    name: "Jest",
    modelPath: "/models/jest-transformed.png",
  },
];


const expCards = [
  {
    review: "Built applied AI and ML systems that transform financial data, market signals, and unstructured text into predictive insights, recommendations, and risk signals for SaaS products.",
    imgPath: "/images/exp-cosminder.svg",
    logoPath: "/images/logo-cosminder.svg",
    company: "Cosminder Solutions",
    title: "Applied AI Systems Engineer",
    date: "June 2025 - Present",
    liveLink: "https://cosminder.com",
    responsibilities: [
      "Developed ML pipelines transforming financial data, market signals, and unstructured text into predictive insights, recommendations, and risk signals for SaaS products",
      "Implemented financial feature engineering, sentiment analysis, and MLP-based supply-chain simulations, with research trials reporting 18–25% lower forecasting error and 12% lower logistics costs",
      "Modeled automation across 200 companies, estimating 240 hours of monthly capacity released (1.5 FTE equivalent) under assumptions of two hours of manual work per company monthly and 60% task automation",
    ],
  },
  {
    review: "Built data and notification systems across multiple marketing platforms, delivering near real-time anomaly alerts, a centralized analytics engine, and faster database operations.",
    imgPath: "/images/exp-grippi.png",
    logoPath: "/images/logo-grippi.png",
    company: "Grippi.io",
    title: "Full Stack Engineer",
    date: "November 2024 - April 2025",
    liveLink: "https://www.grippi.io",
    responsibilities: [
      "Contributed to AI-driven Slack and WhatsApp alerting systems, reducing marketing anomaly detection latency from daily reporting cycles to near-real-time notifications",
      "Integrated Meta, Google Ads, and Shopify data into a centralized analytics engine, consolidating data from 3+ platforms",
      "Developed automated data pipeline and optimized existing database queries, reducing query time by 15% and improving overall system performance",
    ],
  },
  

  /* ===== Empty templates for future experience entries ===== */
  // {
  //   review: "",
  //   imgPath: "",
  //   logoPath: "",
  //   title: "",
  //   date: "",
  //   responsibilities: [],
  // },
  // {
  //   review: "",
  //   imgPath: "",
  //   logoPath: "",
  //   title: "",
  //   date: "",
  //   responsibilities: [],
  // },
];


const expLogos = [
  {
    name: "logo-cosminder",
    imgPath: "/images/logo-cosminder.svg",
  },
  {
    name: "logo-grippi",
    imgPath: "/images/logo-grippi.png",
  },
  // {
  //   name: "logo3",
  //   imgPath: "/images/logo3.png",
  // },
];

const testimonials = [
  {
    name: "Adarsh Keshri",
    mentions: "Cosminder Solutions",
    designation: "Founder/CEO",
    profileLink: "https://www.linkedin.com/in/adarshk13/",
    companyLink: "https://cosminder.com",
    review:
      "Siddhartha is someone people can rely on when something needs to get done, and he is generally happy to help others. He takes a lot of pride in his work, which sometimes makes him a little hard to convince.",
    imgPath: "/images/client1.webp",
  },
  {
    name: "Om Bharti",
    mentions: "Grippi.io",
    designation: "Founding Developer",
    profileLink: "https://www.linkedin.com/in/om-bhartiofficial/",
    companyLink: "https://www.grippi.io",
    review:
      "Sid is quite analytical by nature and usually prefers decisions to be based on data instead of assumptions. Sometimes he can be a bit opinionated, but he also cares a lot about understanding things correctly and getting the technical details right.",
    imgPath: "/images/client3.webp",
  },
  // {
  //   name: "",
  //   mentions: "",
  //   review:
  //     "",
  //   imgPath: "/images/client2.png",
  // },
  // {
  //   name: "",
  //   mentions: "",
  //   review:
  //     "",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "",
  //   mentions: "",
  //   review:
  //     "",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "",
  //   mentions: "",
  //   review:
  //     "",
  //   imgPath: "/images/client6.png",
  // },
];

const socialImgs = [
  
  {
    name: "github",
    url: "https://github.com/Sid2169",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    url: "https://x.com/Singh_Sid2169",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/siddhartha-suman-952a64256/",
    imgPath: "/images/linkedin.png",
  },
  //{
  //  name: "insta",
  //  url: "https://www.instagram.com/siddhartha_2169/",
  //  imgPath: "/images/insta.png",
  //},
];

const projects = [
  {
    name: "Turbo - AI Code Editor(Web)",
    description: "A full-stack, browser-based AI code editor powered by WebContainers — runs Node.js entirely in the browser with zero backend. Streams AI responses token-by-token, uses Inngest for durable background job orchestration, and supports real-time multi-user state. Built to handle concurrent sessions with no cold-start latency.",
    techStack: ["Next.js 16", "Convex", "Inngest", "Vercel AI SDK", "WebContainer API"],
    liveLink: "https://turbo-navy-iota.vercel.app/",
    imagePath: "/images/project1.webp",
    githubLink: "https://github.com/Sid2169/turbo",
  },
  {
    name: "DeepRead - Book Reading Voice Assistant",
    description: "An AI-powered reading platform that parses PDFs up to 200 pages and enables real-time voice Q&A with sub-3s response latency. Integrates Google Gemini for semantic document understanding and stores embeddings in MongoDB. Full auth, file storage, and serverless deployment.",
    techStack: ["Next.js 16", "Google Gemini API", "Vapi", "ElevenLabs", "Vercel Blob", "PDF.js"],
    liveLink: "https://deep-read-ai-lac.vercel.app/",
    imagePath: "/images/project2.webp",
    githubLink: "https://github.com/Sid2169/DeepReadAI",
  },
  // {
  //   name: "PG Life",
  //   description: "PG Life is a PG (paying guest) accommodation search web app for students and working professionals: browse PG listings in a city, filter them by gender, budget and rent, view photos, amenities and ratings, and shortlist the ones you like.",
  //   techStack: ["React", "MySql", "Bootstrap"],
  //   liveLink: "https://pglife-production-a9c9.up.railway.app/",
  //   imagePath: "/images/project3.webp",
  //   githubLink: "https://github.com/Sid2169/PGLife",
  // },
  {
    name: "Odin Showcase",
    description: "A showcase of projects built while following The Odin Project curriculum. A documentation of my journey of learning development",
    techStack: ["TypeScript/React 19", "Vite"],
    liveLink: "https://sid2169.github.io/odin-showcase/",
    imagePath: "/images/project4.webp",
    githubLink: "https://github.com/Sid2169/odin-showcase",
  },

  /* ===== Planned projects (commented out until shipped) ===== */
  // {
  //   name: "Enterprise Knowledge AI — RAG & Research Platform",
  //   description: "Implemented enterprise document intelligence using RAG, hybrid search, reranking, and source-cited answers. Evaluated retrieval and answer quality using faithfulness, relevance, and citation-accuracy metrics. Implemented metadata-filtered vector search and document-level access control.",
  //   techStack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector", "Qdrant", "RAGAS"],
  //   liveLink: "https://example.com/PLACEHOLDER",
  //   imagePath: "/images/project-placeholder.webp",
  //   githubLink: "https://github.com/PLACEHOLDER",
  // },
  // {
  //   name: "AI Operations Agent — Tool-Using Workflow Automation",
  //   description: "Implemented stateful AI agents executing multi-step workflows through tool calling and external API integrations. Added human-in-the-loop approvals, structured outputs, and permission-controlled tool execution. Implemented execution tracing, failure recovery, and task-completion evaluation.",
  //   techStack: ["Python", "LangGraph", "MCP", "FastAPI", "PostgreSQL"],
  //   liveLink: "https://example.com/PLACEHOLDER",
  //   imagePath: "/images/project-placeholder.webp",
  //   githubLink: "https://github.com/PLACEHOLDER",
  // },
  // {
  //   name: "LLM Gateway — AI Infrastructure & Observability",
  //   description: "Implemented multi-provider LLM routing with fallback strategies, rate limiting, and inference-cost optimization. Added resilient asynchronous execution with retries, idempotency, and concurrency control. Instrumented latency, token consumption, provider failures, and inference costs.",
  //   techStack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Inngest", "Docker"],
  //   liveLink: "https://example.com/PLACEHOLDER",
  //   imagePath: "/images/project-placeholder.webp",
  //   githubLink: "https://github.com/PLACEHOLDER",
  // },

  // {
  //   name: "",
  //   description: "",
  //   techStack: [],
  //   liveLink: "",
  //   imagePath: "",
  // },
];

const OtherLinks = {
  submitTestimonialLink: "https://testimonials-website-rho.vercel.app/",
};

export {
  words,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techCategories,
  appliedAIStack,
  corePrimaryStack,
  techStackImgs,
  navLinks,
  projects,
  OtherLinks,
};