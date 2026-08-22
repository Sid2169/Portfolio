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
  { text: "Web Apps",     imgPath: "/images/logos/react-dark.svg" },
  { text: "AI Apps",   imgPath: "/images/logos/claude-dark.svg" },
  { text: "REST APIs",         imgPath: "/images/logos/node-dark.svg" },
  { text: "Infra",   imgPath: "/images/logos/infra.png" },

  { text: "Web Apps",     imgPath: "/images/logos/react-dark.svg" },
  { text: "AI Apps",  imgPath: "/images/logos/claude-dark.svg" },
  { text: "REST APIs",        imgPath: "/images/logos/node-dark.svg" },
  { text: "Infra",  imgPath: "/images/logos/infra.png" },
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


const corePrimaryStack = [
  { name: "TypeScript", level: "Primary Language", iconPath: "/images/logos/typescript.svg" },
  { name: "Next.js (App Router)", level: "Primary Framework", iconPath: "/images/logos/nextjs-light.svg" },
  { name: "React 19", level: "Frontend Core", iconPath: "/images/logos/react-dark.svg" },
  { name: "Node.js", level: "Backend Core", iconPath: "/images/logos/node-dark.svg" },
  { name: "PostgreSQL", level: "Database Core", iconPath: "/images/logos/postgresql.webp" },
  { name: "Express.js", level: "API Framework", iconPath: "/images/logos/express-light.svg" },
  { name: "Docker", level: "Development & Deployment", iconPath: "/images/logos/docker.svg" },
];

const techCategories = [
  {
    title: "Frontend",
    icon: "💻",
    description: "App Router, Server Components & State Management",
    skills: [
      { name: "Next.js", iconPath: "/images/logos/nextjs-light.svg" },
      { name: "App Router", iconPath: "/images/logos/nextjs-light.svg" },
      { name: "Server Components", iconPath: "/images/logos/react.png" },
      { name: "Server Actions", iconPath: "/images/logos/react.png" },
      { name: "TypeScript", iconPath: "/images/logos/typescript.svg" },
      { name: "Tailwind CSS", iconPath: "/images/logos/tailwindcss.svg" },
      { name: "Zustand", iconPath: "/images/logos/zustand.svg" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "⚙️",
    description: "APIs, Relational & NoSQL Databases",
    skills: [
      { name: "Node.js", iconPath: "/images/logos/node.png" },
      { name: "Express", iconPath: "/images/logos/express.svg" },
      { name: "PostgreSQL", iconPath: "/images/logos/postgresql.webp" },
      { name: "MongoDB", iconPath: "/images/logos/mongodb.svg" },
      { name: "Mongoose", iconPath: "/images/logos/mongodb.svg" },
      { name: "Convex", iconPath: "/images/logos/convex.svg" },
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
    ],
  },
  {
    title: "Platform & Tooling",
    icon: "🛠️",
    description: "DevOps, Authentication & Monitoring",
    skills: [
      { name: "Vercel", iconPath: "/images/logos/vercel.svg" },
      { name: "Clerk", iconPath: "/images/logos/clerk.svg" },
      { name: "Git & GitHub", iconPath: "/images/logos/git.svg" },
      { name: "Webpack", iconPath: "/images/logos/webpack.svg" },
      { name: "Jest", iconPath: "/images/logos/jest.svg" },
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
    review: "Maintained and extended a production Next.js website, built a complete blog management system, and refactored core code to improve performance and maintainability.",
    imgPath: "/images/exp-cosminder.svg",
    logoPath: "/images/logo-cosminder.svg",
    title: "Full Stack Web Developer",
    date: "June 2025 - December 2025",
    liveLink: "https://cosminder.com",
    responsibilities: [
      "Maintained and extended the company's primary Next.js website, improving Core Web Vitals and cutting page load time by 25% through code splitting and image optimization",
      "Built and shipped a blog management feature end to end, cutting average content publishing time from hours to minutes for the non-technical content team",
      "Refactored core sections of the codebase, reducing duplicate logic by ~30% and shortening onboarding time for new contributors",
    ],
  },
  {
    review: "Built and improved data and notification systems across multiple marketing platforms, contributing to near real-time anomaly alerts, centralized analytics, and faster database operations.",
    imgPath: "/images/exp-grippi.png",
    logoPath: "/images/logo-grippi.png",
    title: "Full Stack Web Developer Intern",
    date: "November 2024 - April 2025",
    liveLink: "https://www.grippi.io",
    responsibilities: [
      "Helped build AI-driven Slack and WhatsApp notification systems, cutting the time to surface marketing performance anomalies from daily reports to near real-time alerts", 
      "Contributed to third-party API integrations (Meta, Google Ads, Shopify), consolidating data from 3+ platforms into one centralized analytics engine",
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
    mentions: "@cosminder",
    review:
      "Siddhartha is someone people can rely on when something needs to get done, and he is generally happy to help others. He takes a lot of pride in his work, which sometimes makes him a little hard to convince.",
    imgPath: "/images/client1.webp",
  },
  {
    name: "Om Bharti",
    mentions: "@Data Vinci",
    review:
      "Sid is quite analytical and often pushes for decisions to be backed by data rather than assumptions. He can be opinionated, but he cares about getting the technical details right.",
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
  {
    name: "Aero - Weather Dashboard",
    description: "A simple weather dashboard, that shows current, hourly and 7-day weather forecast with 5-day air quality index of any city.",
    techStack: ["Weather API"],
    liveLink: "https://sid2169.github.io/aero/",
    imagePath: "/images/project3.webp",
    githubLink: "https://github.com/Sid2169/aero",
  },
  // {
  //   name: "",
  //   description: "",
  //   techStack: [],
  //   liveLink: "",
  //   imagePath: "",
  // },
];

export {
  words,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techCategories,
  corePrimaryStack,
  techStackImgs,
  navLinks,
  projects,
};