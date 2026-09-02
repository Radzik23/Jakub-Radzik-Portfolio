// lib/data.ts — dane nietłumaczalne (linki, obrazy, technologie)

export const PROJECTS_META = [
  {
    id: 1,
    tech: ["Next.js", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/tiktok.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Radzik23/TikTok-recipes",
  },
  {
    id: 2,
    tech: ["WordPress", "PHP", "JavaScript", "HTML/CSS"],
    image: "/projects/zakatek.png",
    liveUrl: "https://zakatek-odkrywcow.pl/",
    githubUrl: "https://github.com/Radzik23/kindergarten-theme",
  },
  {
    id: 3,
    tech: ["React Native", "Expo", "Zustand", "Firebase"],
    image: "/projects/Mobile.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    tech: ["Astro", "WordPress", "TypeScript", "REST API", "GitHub Actions"],
    image: "/projects/kucharzzsaseidztwa.png",
    liveUrl: "https://kucharzzsasiedztwa.pl/",
    githubUrl: "#",
  },
];

export const SKILLS = {
  frontend: ["React", "React Native", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3 (SASS)", "Redux Toolkit", "Zustand"],
  backend: ["Node.js", "PostgreSQL", "Prisma ORM", "WordPress", "PHP", "Firebase", "Expo", "Python"],
  tools: ["Git", "GitHub", "Figma", "Jest", "React Testing Library"],
};

export const HOBBIES_META = [
  { image: "/hobby1.png", imagePosition: "object-[center_67%]" },
  { image: "/hobby2.png", imagePosition: "object-center" },
  { image: "/hobby3.png", imagePosition: "object-center" },
];
