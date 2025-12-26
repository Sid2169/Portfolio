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

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
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

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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


const techStackIcons = [
  {
    name: "React & TypeScript",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular Developer",
    modelPath: "/models/angular-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend (Node & Express)",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "PostgreSQL Database",
    modelPath: "/models/postgresql-transformed.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
  {
    review: "Contributed reliably to a live production website, handled both frontend and backend tasks with confidence, and actively improved existing code. Worked well within the team, picked up new requirements quickly, and delivered meaningful features like the blog system with minimal supervision.",
    imgPath: "/images/exp-cosminder.svg",
    logoPath: "/images/logo-cosminder.svg",
    title: "Full Stack Web Developer",
    date: "June 2025 - December 2025",
    responsibilities: [
      "Maintained and extended core functionality of the company’s primary production website, improving stability, responsiveness, and cross-device user experience.",
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
  // {
  //   name: "logo2",
  //   imgPath: "/images/logo2.png",
  // },
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
  // {
  //   name: "",
  //   mentions: "",
  //   review:
  //     "",
  //   imgPath: "/images/client3.png",
  // },
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
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};