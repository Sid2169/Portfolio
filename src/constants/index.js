const navLinks = [
  {
    name: "Work",
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
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
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


const techCategories = [
  {
    title: "Frontend & Core",
    icon: "💻",
    description: "App Router, Server Components & State Management",
    skills: [
      { name: "Next.js / React", iconPath: "/models/nextjs-transformed.png" },
      { name: "App Router", iconPath: "/models/nextjs-transformed.png" },
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
    review: "Demonstrated strong technical initiative by building complex data pipelines and integrating multi-channel marketing APIs. Successfully bridge the gap between raw data and user-friendly insights, delivering high-impact features for the AI analytics dashboard while maintaining high code quality in a fast-paced environment",
    imgPath: "/images/exp-grippi.png",
    logoPath: "/images/logo-grippi.png",
    title: "Full Stack Web Developer Intern",
    date: "November 2024 - April 2025",
    responsibilities: ["Integrated third-party APIs from platforms like Meta, Google Ads, and Shopify to aggregate real-time marketing data into a centralized analytics engine.",
      "Developed interactive data visualization components and dashboards to help users track key performance indicators (KPIs) and ROI across multiple channels.",
      "Assisted in the implementation of AI-driven notification systems for WhatsApp and Slack, automating the delivery of performance anomalies and marketing insights.",
      "Optimized backend data processing workflows to ensure low-latency reporting and scalable handling of large-scale advertising datasets.",],
  },
  {
    review: "Contributed reliably to a live production website, handled both frontend and backend tasks with confidence, and actively improved existing code. Worked well within the team, picked up new requirements quickly, and delivered meaningful features like the blog system with minimal supervision.",
    imgPath: "/images/exp-cosminder.svg",
    logoPath: "/images/logo-cosminder.svg",
    title: "Full Stack Web Developer",
    date: "June 2025 - December 2025",
    responsibilities: [
      "Maintained and extended core functionality of the company's primary production website, improving stability, responsiveness, and cross-device user experience.",
      "Developed and integrated a blog management system enabling dynamic content creation, editing, and publishing through a structured backend workflow.",
      "Refactored existing codebase to enhance readability, performance, and long-term maintainability.",
      "Collaborated within an agile team environment to implement features and resolve bugs efficiently.",
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
      "Sid made major contributions to our UI modernization, blog integration, proprietary LLM API design, and the business logic behind our quant-focused services. His impact was broad and substantial.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Om Bharti",
    mentions: "@DaVinci",
    review:
      "Sid's technical expertise and collaborative approach made him an invaluable team member. His contributions to our projects were both innovative and impactful.",
    imgPath: "/images/client3.png",
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
    url: "https://www.linkedin.com/in/siddhartha-singh-952a64256/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "insta",
    url: "https://www.instagram.com/siddhartha_2169/",
    imgPath: "/images/insta.png",
  },
];

const projects = [
  {
    name: "Turbo - AI Editor",
    description: "Turbo is an AI-powered browser-based IDE inspired by Cursor AI",
    techStack: ["Next.js 16", "Convex", "Inngest", "React 19", "Typescript", "Tailwind CSS 4", "WebContainer API", "Varcel AI SDK", "Clerk", "Sentry", "Zustand"],
    liveLink: "https://turbo-navy-iota.vercel.app/",
    imagePath: "/images/project1.webp",
    githubLink: "https://github.com/Sid2169/turbo",
  },
  {
    name: "DeepRead AI",
    description: "DeepRead is an AI-powered platform for having real-time voice conversations with your books.",
    techStack: ["Next.js 16", "MongoDB", "Google Gemini API", "React 19", "Typescript", "Tailwind CSS 4", "Clerk",  "Mongoose", "Vapi", "ElevenLabs", "Varcel Blob", "PDF.js"],
    liveLink: "https://deep-read-ai-lac.vercel.app/",
    imagePath: "/images/project2.webp",
    githubLink: "https://github.com/Sid2169/DeepReadAI",
  },
  {
    name: "Aero - Weather Dashboard",
    description: "A glassmorphism dark-themed weather dashboard that delivers real-time conditions, hourly forecasts, air quality data, and 7-day outlooks — with dynamic backgrounds and smooth unit toggling.",
    techStack: ["JavaScript", "Tailwind CSS", "Weather API"],
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
  techStackImgs,
  navLinks,
  projects,
};