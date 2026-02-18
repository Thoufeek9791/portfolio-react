import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import ticTacImg from "../assets/projects/tic-tac-toe.jpg";
import todoImg from "../assets/projects/todo-1.jpg";

export const HERO_CONTENT = `Senior Frontend Software Engineer with ~3 years of experience building scalable, production-grade web applications using React, Next.js, and TypeScript. Strong expertise in performance optimization, accessibility (WCAG), design systems, and modern rendering strategies (SSR, SSG, ISR, CSR). Proven track record of improving application performance, developer experience, and frontend scalability across multiple product teams.`;

export const ABOUT_TEXT = `I'm a Senior Frontend Engineer at Novac Technology Solutions with a passion for building high-performance, accessible web applications. I specialize in React, Next.js, TypeScript, and Tailwind CSS — crafting scalable design systems and reusable component architectures.

I've led the development of 50+ reusable UI components adopted across 3 product teams, pioneered a design system with Storybook and Radix UI achieving 90% adoption, and improved Lighthouse scores from 68 to 95. My work spans responsive design, WCAG accessibility compliance, advanced state management with Redux Toolkit and Zustand, and performance-driven frontend architectures.

With a Master's in Computer Applications and certifications from Udemy, Scrimba, and HackerRank, I'm constantly evolving. I leverage AI-powered development tools like Cursor, Antigravity, and Claude Code to accelerate my workflow and boost productivity. Whether it's optimizing Core Web Vitals, implementing CI/CD pipelines, or building micro-frontend environments, I'm dedicated to making the web faster, more accessible, and more intuitive.`;

export const EXPERIENCES = [
  {
    year: "04/2025 - Present",
    role: "Senior Software Engineer (Frontend)",
    company: "Novac Technology Solutions",
    description: `Pioneered a scalable design system with Storybook and Radix UI, achieving 90% adoption across all product teams with WCAG accessibility compliance. Led development of 50+ reusable UI components across 3 product teams. Optimized Lighthouse score from 68 to 95 and reduced bundle size by 35%. Engineered scalable API data layers using TanStack Query with caching, retry logic, and background synchronization. Implemented CI/CD pipelines with ESLint, Prettier, Husky, and lint-staged.`,
    technologies: ["React", "Next.js", "TypeScript", "Zustand", "TanStack Query", "Storybook", "Radix UI"],
  },
  {
    year: "07/2024 - 03/2025",
    role: "Software Engineer (Frontend)",
    company: "Novac Technology Solutions",
    description: `Developed production features using React 19, Next.js, Redux Toolkit, Zustand, RTK Query, and Tailwind CSS. Implemented accessible, responsive UI interfaces based on Figma design system. Integrated multiple REST APIs supporting high-frequency UI data updates. Improved SEO and web visibility using semantic HTML and optimized metadata. Strengthened frontend security with authentication best practices and XSS/CSRF protection.`,
    technologies: ["React", "Next.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
  },
  {
    year: "07/2023 - 06/2024",
    role: "Software Engineer Trainee (Frontend)",
    company: "Novac Technology Solutions",
    description: `Trained on modern frontend technologies including React, Tailwind CSS, Git, and JavaScript. Developed reusable UI components and contributed to internal component libraries. Assisted in debugging UI issues and improving code quality through peer reviews and refactoring.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"],
  },
];

export const PROJECTS = [
   {
    title: "SKI Retail Capital",
    link: 'https://skiretailcapital.com/',
    image: project3,
    description:
      "A financial services web platform built with modern JavaScript and Node.js. Developed responsive, performance-optimized interfaces with modular ES6 architecture.",
    technologies: ["HTML", "CSS", "JavaScript", "ES6", "Node.js", "Express"],
  },
  {
    title: 'Shriram AMC',
    link: 'https://www.shriramamc.in/',
    image: project4,
    description:
      "A financial services platform for mutual funds where I developed responsive frontend interfaces. Built fund listing pages, SIP and Lumpsum calculators, and goal-based investment planning sections with seamless user experience and optimized performance.",
    technologies: ["HTML", "CSS", "JavaScript", "ES6", "Node.js", "Express"],
  },
  {
    title: "Promptopia",
    image: project1,
    link: 'https://promptopia-eight-navy.vercel.app/',
    description:
      "A full-stack AI prompt sharing platform built with Next.js. Features user authentication, CRUD operations, and a modern UI for discovering and sharing creative prompts.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Tenzies Game",
    link: 'https://thoufeek9791.github.io/tenzies-game/',
    image: project2,
    description:
      "A fast-paced dice-rolling game built with React. Features interactive gameplay, real-time state management, and a sleek UI. Roll the dice, lock in your numbers, and win by matching all ten! 🎲⚡",
    technologies: ["React", "CSS"],
  },
  {
    title: "Tic Tac Toe Game",
    link: 'https://thoufeek9791.github.io/Tic-Tac-Toe/',
    image: ticTacImg,
    description:
      "A classic Tic-Tac-Toe game with smooth user interactions, real-time win detection, responsive design, and celebration confetti animation. 🎮✨",
    technologies: ["HTML", "Bootstrap", "JavaScript", "ES6", "react-confetti"],
  },
  {
    title: "TODO LIST",
    link: 'https://thoufeek9791.github.io/To-do-list-1/',
    image: todoImg,
    description:
      "An interactive To-Do List web app with add, delete, and mark-as-completed functionality. Features local storage persistence and a clean, responsive UI for seamless task management.",
    technologies: ["HTML", "CSS", "JavaScript", "ES6", "Local Storage"],
  },
];

export const CONTACT = {
  address: "Chennai, India",
  phoneNo: "+91 9791055172",
  email: "thoufeekrahuman9361@gmail.com",
};
