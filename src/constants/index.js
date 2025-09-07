import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import ticTacImg from "../assets/projects/tic-tac-toe.jpg";
import todoImg from "../assets/projects/todo-1.jpg";

export const HERO_CONTENT = `I am a creative and detail-oriented Front-End Developer with two years of experience in building responsive and user-friendly web applications. I specialize in crafting intuitive user interfaces, enhancing user experiences, and ensuring seamless functionality across devices. Passionate about clean design and efficient development, I thrive on turning ideas into engaging digital experiences that align with modern web standards and user expectations.`;

export const ABOUT_TEXT = `I’m a Frontend Developer with a strong passion for building responsive, user-friendly web applications. With one year of industry experience, I specialize in HTML, CSS, JavaScript, React, Next.js 14, and Tailwind CSS, creating modern and interactive interfaces.

I thrive on turning designs into seamless digital experiences, ensuring performance, accessibility, and clean code. My expertise extends to Figma, Material UI, Redux, API integration, and crafting scalable UI components with Shadcn UI.

Constantly staying updated with the latest web technologies, I strive to deliver high-quality solutions tailored to user needs. Whether it’s optimizing UI/UX, implementing dynamic components, or building interactive dashboards, I’m dedicated to making the web more intuitive and efficient.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Senior Software Engineer",
    company: "Novac Technology and Solutions.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "Zustand"],
  },
  {
    year: "2024 - 2025",
    role: "Software Engineer",
    company: "Novac Technology and Solutions.",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Node", "Express", "Mongo DB", "mySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Software Engineer Trainee",
    company: "Novac Technology and Solutions.",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    // technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    technologies: ["HTML", "CSS", "Javascript", "scss", 'Bootstrap'],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
   {
    title: "SKI Retail Capital",
    link: 'https://skiretailcapital.com/',
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "javascript", "ES6", 'modules', 'nodejs', 'express'],
  },
  {
    title: 'Shriram AMC',
    link: 'https://www.shriramamc.in/',
    image: project4,
    description:
      "I worked on the Shriram AMC website, a financial services platform for mutual funds, where I developed responsive and user-friendly frontend interfaces. My contributions included building fund listing pages, implementing SIP and Lumpsum calculators, and enhancing goal-based investment planning sections. I focused on delivering a seamless user experience with modern UI, smooth navigation, and optimized performance, while ensuring accessibility and design consistency across devices.",
    technologies: ["HTML", "CSS", "javascript", "ES6", 'modules', 'nodejs', 'express'],
  },
  {
    title: "Promptopia",
    image: project1,
    link: 'https://promptopia-eight-navy.vercel.app/',
    description:
      "A fully functional Prompt based Ai Website",
    technologies: ["Nextjs", "Tailwind", "Nodejs", "MongoDB"],
  },
  {
    title: "Tenzies Game",
    link: 'https://thoufeek9791.github.io/tenzies-game/',
    image: project2,
    description:
      "A fast-paced dice-rolling game built with React. Features interactive gameplay, real-time state management, and a sleek UI. Roll the dice, lock in your numbers, and win by matching all ten! 🎲⚡",
    technologies: ["React", "CSS"],
  },
  // {
  //   title: "Portfolio Website",
  //   link: 'https://promptopia-eight-navy.vercel.app/',
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Cryptocurrency Website",
  //   link: '',
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["React", "Redux Toolkit", "Redux Toolkit Query", "Shadcn UI", "mySQL", "nodejs"],
  // },
  {
    title: "Tic Tac Toe Game",
    link: 'https://thoufeek9791.github.io/Tic-Tac-Toe/',
    image: ticTacImg,
    description:
      "A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Features smooth user interactions, real-time win detection, and a responsive design. Play against a friend and enjoy a fun, minimalistic gaming experience! 🎮✨",
    technologies: ["Html", "Bootstrap", "Vanilla JavaScript", "ES6", "react-confetti"],
  },
  {
    title: "TODO LIST",
    link: 'https://thoufeek9791.github.io/To-do-list-1/',
    image: todoImg,
    description:
      "A simple and interactive To-Do List web app built with JavaScript, allowing users to add, delete, and mark tasks as completed. The app features a clean and responsive UI for seamless task management. It utilizes local storage to save tasks even after refreshing the page. Designed for efficiency, it enhances productivity with an intuitive user experience.",
    technologies: ["HTML", "CSS", "Vanilla JavaScript", "ES6", "Local Storage",],
  },
];

export const CONTACT = {
  address: "Mylapore Chennai",
  phoneNo: "+91 9791055172",
  email: "thoufeekrahuman9361@gmail.com",
};
