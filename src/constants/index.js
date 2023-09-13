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
  carrent,
  jobit,
  tripguide,
  threejs,
  vuejs,
  jestjs,
  phone,
  pokemonCard
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  },
  {
    id: 'lang',
    title: 'EN'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Singer',
    icon: reactjs
  },
  {
    title: 'Vue Dreamer',
    icon: vuejs
  },
  {
    title: 'Test Slayer',
    icon: jestjs
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Vue Js',
    icon: vuejs
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Jest',
    icon: jestjs
  },
  // {
  //   name: 'Firebase',
  //   icon: firebase
  // },
  {
    name: 'Three JS',
    icon: threejs
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
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'Vue.js Developer',
    company_name: 'Sheng Jin Integrated Services',
    icon: 'https://www.sjis.com.tw/favicon.ico',
    iconBg: '#383E56',
    date: 'March 2021 - March 2022',
    points: [
      'Collaborated with team members, including PM, UX, FE, BE, QA, SA',
      'Responsible for creating new features, integrating Restful API, modularizing UI components,',
      'SEO optimization, algorithm sorting data and hierarchical data linkage',
      'Construction Project and Data Structure Design'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Starlux Airlines',
    icon: 'https://www.starlux-airlines.com/favicon.png',
    iconBg: '#E6DEDD',
    date: 'April 2022 - Current',
    points: [
      'Design Project Architecture and Page Routing Flow',
      'Build Vue Framework Component Library and Implement Component Logic',
      'Write Dockerfile and Set up CI/CD Processes',
      'Performance Optimization and Ongoing Version Maintenance',
      'Storybook Component Library Design and Collaboration with UI/UX'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Pokemon Card',
    description:
      'Build an Infinite Scrolling Pokémon Website Using React and Third-party APIs, and Recommend a Pokémon that Suits You Today, Providing an Entertaining Animation Display.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'zpix.css',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: pokemonCard,
    source_code_link: 'https://github.com/eepson123tw/pokemon'
  },
  {
    name: 'Blog',
    description:
      'Build A tech blog to record my dev life and write the new skill I have learned.covering a range of topics in frontend, backend, DevOps, and other areas of technology.',
    tags: [
      {
        name: 'Vue3',
        color: 'green-text-gradient'
      },
      {
        name: 'Vite',
        color: 'green-text-gradient'
      },
      {
        name: 'VitePress',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'nginx',
        color: 'green-text-gradient'
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient'
      },
      {
        name: 'husky',
        color: 'blue-text-gradient'
      }
    ],
    image: blog,
    source_code_link: 'https://github.com/eepson123tw/blog/tree/feature/husky'
  },
  {
    name: 'Portfolio',
    description:
      'try to use Three.js and React three fiber to build a phone view Resume.',
    tags: [
      {
        name: 'Three.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'React',
        color: 'green-text-gradient'
      },
      {
        name: 'React three fiber',
        color: 'pink-text-gradient'
      }
    ],
    image: phone,
    source_code_link: 'https://github.com/eepson123tw/ph-portfolio'
  },
  {
    name: 'CompanyProject 1',
    description: 'to be continue....',
    tags: [
      {
        name: 'Vue2',
        color: 'blue-text-gradient'
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient'
      },
      {
        name: 'lodash',
        color: 'pink-text-gradient'
      }
    ],
    image: '',
    source_code_link: ''
  },
  {
    name: 'CompanyProject 2',
    description: 'to be continue....',
    tags: [
      {
        name: 'Vue2',
        color: 'blue-text-gradient'
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient'
      },
      {
        name: 'lodash',
        color: 'pink-text-gradient'
      }
    ],
    image: '',
    source_code_link: ''
  },
  {
    name: 'CompanyProject 2',
    description: 'to be continue....',
    tags: [
      {
        name: 'Vue2',
        color: 'blue-text-gradient'
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient'
      },
      {
        name: 'lodash',
        color: 'pink-text-gradient'
      }
    ],
    image: '',
    source_code_link: ''
  }
]

export { services, technologies, experiences, testimonials, projects }
