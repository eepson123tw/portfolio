// @ts-nocheck
import {
  reactjs,
  blog,
  web,
  javascript,
  typescript,
  html,
  css,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  vuejs,
  jestjs,
  phone,
  pokemonCard,
  gptAudio,
  gptPrompts,
  lastMile,
  ojosama,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "contact",
    title: "contact",
  },
  {
    id: "lang",
    title: "EN",
  },
];

const services = [
  {
    title: "web",
    icon: web,
  },
  {
    title: "react",
    icon: reactjs,
  },
  {
    title: "vue",
    icon: vuejs,
  },
  {
    title: "test",
    icon: jestjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue Js",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Jest",
    icon: jestjs,
  },
  // {
  //   name: 'Firebase',
  //   icon: firebase
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: 'git',
  //   icon: git
  // },
  // {
  //   name: 'figma',
  //   icon: figma
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Sheng Jin Integrated Services",
    icon: "https://www.sjis.com.tw/favicon.ico",
    iconBg: "#383E56",
    date: "March 2021 - March 2022",
    points: [
      "Collaborated with team members, including PM, UX, FE, BE, QA, SA",
      "Responsible for creating new features, integrating Restful API, modularizing UI components,",
      "SEO optimization, algorithm sorting data and hierarchical data linkage",
      "Construction Project and Data Structure Design",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Starlux Airlines",
    icon: "https://www.starlux-airlines.com/favicon.png",
    iconBg: "#E6DEDD",
    date: "April 2022 - Current",
    points: [
      "Design Project Architecture and Page Routing Flow",
      "Build Vue Framework Component Library and Implement Component Logic",
      "Write Dockerfile and Set up CI/CD Processes",
      "Performance Optimization and Ongoing Version Maintenance",
      "Storybook Component Library Design and Collaboration with UI/UX",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Ionex_Energy",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgnmHmY_0bC3chh0tts4JE9XJHQjn_hvj6Q&s",
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "GraphQL API Integration and Data Fetching",
      "TypeScript and React Hook Development",
      "Build React Framework Component Library and Implement Component Logic",
      "Performance Optimization and Ongoing Version Maintenance",
      "Visual Chart Design and Data Analysis",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LastMile",
    description:
      "This side project is designed to provide users with an easy way to find affordable airfare. It features a visual chart segment that analyzes the top three airlines in terms of current traffic and passenger volume, offering users a comprehensive understanding of the aviation sector. Additionally, it employs Three.js technology to create an engaging questionnaire section, enhancing the interactive and enjoyable aspects of the user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js + React Three Fiber",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "SSG",
        color: "pink-text-gradient",
      },
    ],
    image: lastMile,
    source_code_link: "http://lastmile.ink/analyance/passenger",
  },
  {
    name: "GoodNightOjoSama",
    description:
      "A Chatbot base on the meme,When you pass the keyborad, if will play the music and ask the gpt chatbot which has the role of deacon, and he will answer you with the meme.",
    tags: [
      {
        name: "React + Remix",
        color: "blue-text-gradient",
      },
      {
        name: "GPT-4",
        color: "green-text-gradient",
      },
      {
        name: "Node+Express",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: ojosama,
    source_code_link: "https://good-night-ojosama.zeabur.app/",
  },
  {
    name: "GPT Audio",
    description:
      "This side project utilizes GPT Transition and Audio APIs to provide users with a key point extraction tool. It is capable of identifying timestamps in audio files and uses specific prompts to summarize and highlight each key point. This tool will be particularly valuable for users who need to extract essential information from extended recordings.",
    tags: [
      {
        name: "GPT Api",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gptAudio,
    source_code_link: "https://github.com/eepson123tw/GPT-Audio",
  },
  {
    name: "Blog",
    description:
      "Build A tech blog to record my dev life and write the new skill I have learned.covering a range of topics in frontend, backend, DevOps, and other areas of technology.",
    tags: [
      {
        name: "Vue3",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "VitePress",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "husky",
        color: "blue-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/eepson123tw/blog/tree/feature/husky",
  },
  {
    name: "Pokemon Card",
    description:
      "Build an Infinite Scrolling Pokémon Website Using React and Third-party APIs, and Recommend a Pokémon that Suits You Today, Providing an Entertaining Animation Display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zpix.css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pokemonCard,
    source_code_link: "https://github.com/eepson123tw/pokemon",
  },

  {
    name: "Portfolio",
    description:
      "try to use Three.js and React three fiber to build a phone view Resume.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "React three fiber",
        color: "pink-text-gradient",
      },
    ],
    image: phone,
    source_code_link: "https://github.com/eepson123tw/ph-portfolio",
  },
  {
    name: "GPT Prompts",
    description:
      "This repository is dedicated to efficiently creating, organizing, and sharing GPT prompts across categories like gaming, education, tool development, and creative work. It includes templates and guidelines for standardization, promoting collaboration. Suitable for all users, it aims to enhance productivity and inspire innovation.",
    tags: [
      {
        name: "markdown",
        color: "blue-text-gradient",
      },
      {
        name: "prompts",
        color: "green-text-gradient",
      },
    ],
    image: gptPrompts,
    source_code_link: "https://github.com/eepson123tw/GPT-Prompts",
  },
];

export { services, technologies, experiences, testimonials, projects };
