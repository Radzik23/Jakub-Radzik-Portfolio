// lib/data.ts

export const PERSONAL_INFO = {
  name: "Jakub Radzik",
  role: "Junior Full-Stack Developer",
  headline: "Junior Full-Stack Developer crafting high-performance, elegant digital experiences.",
  bio: "Computer Science Engineer currently pursuing a Master's degree in AI & Machine Learning. Proficient in React, React Native, and Next.js, with hands-on commercial experience in building modern web and mobile applications.",
};
  
export const EXPERIENCE = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Develo Art",
    date: "May 2025 — Present",
    description: "Developing cross-platform mobile health & wellness applications using React Native, Expo, and TypeScript. Implemented offline-first architecture with Zustand and AsyncStorage, and integrated Firebase for real-time data fetching.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Independent",
    date: "June 2025 — Present",
    description: "Managing end-to-end project lifecycles for local businesses. Building high-performance custom WordPress themes from scratch using PHP, HTML, CSS, and JS. Developed custom CMS features and dynamic menu systems.",
  },
  {
    id: 3,
    title: "Customer Service Specialist",
    company: "Dom samochodowy Germaz Ford",
    date: "June 2022 — Nov 2024",
    description: "Handled daily direct communication with clients, independently resolving inquiries and developing strong interpersonal and problem-solving skills.",
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Master's Degree in AI and Machine Learning",
    institution: "Uniwersytet WSB Merito we Wrocławiu",
    date: "2026 — Present",
    description: "Focusing on advanced machine learning algorithms and practical AI applications in modern software.",
  },
  {
    id: 2,
    degree: "B.Eng. in Computer Science (Cloud Systems and Application Engineering)",
    institution: "Uniwersytet Dolnośląska Szkoła Wyższa",
    date: "2022 — 2026",
    description: "Foundation in software engineering principles, algorithms, and distributed systems architecture.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "TikTok Recipe Hub (In Progress)",
    description: "A full-stack application integrating AI models to automatically transcribe TikTok videos and extract structured recipe data into text. Features NextAuth (GitHub OAuth) and Server Actions.",
    tech: ["Next.js", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/tiktok.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Radzik23/TikTok-recipes",
  },
  {
    id: 2,
    title: "Zakątek Odkrywców",
    description: "A high-performance custom WordPress theme built from scratch (no page builders) for a local kindergarten, featuring a custom CMS and dynamic menu systems.",
    tech: ["WordPress", "PHP", "JavaScript", "HTML/CSS"],
    image: "/projects/zakatek.png", 
    liveUrl: "https://zakatek-odkrywcow.pl/", 
    githubUrl: "https://github.com/Radzik23/kindergarten-theme",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    description: "Commercial cross-platform mobile application featuring workout and fasting trackers. Engineered with an offline-first architecture for seamless performance. (Currently unreleased).",
    tech: ["React Native", "Expo", "Zustand", "Firebase"],
    image: "/projects/Mobile.png",
    liveUrl: "#", 
    githubUrl: "#", 
  }
];

export const SKILLS = {
  frontend: ["React", "React Native", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3 (SASS)", "Redux Toolkit", "Zustand"],
  backend: ["Node.js", "PostgreSQL", "Prisma ORM", "WordPress", "PHP", "Firebase", "Expo"],
  tools: ["Git", "GitHub", "Figma", "Jest", "React Testing Library"],
};