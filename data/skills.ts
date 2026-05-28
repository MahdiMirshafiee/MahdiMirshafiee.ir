import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from 'react-icons/si'
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

export const frontendSkills = [
  {
    id: 1,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    label: 'HTML',
    icon: FaHtml5,
  },
  {
    id: 2,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    label: 'CSS',
    icon: FaCss3,
  },
  {
    id: 3,
    href: 'https://react.dev',
    label: 'React',
    icon: FaReact,
  },
  {
    id: 4,
    href: 'https://redux-toolkit.js.org/rtk-query/overview',
    label: 'Redux',
    icon: SiRedux,
  },
  {
    id: 5,
    href: 'https://nextjs.org',
    label: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    id: 6,
    href: 'https://tailwindcss.com',
    label: 'Tailwind CSS',
    icon: RiTailwindCssFill,
  },
]

export const backendSkills = [
  {
    id: 1,
    href: 'https://www.typescriptlang.org/',
    label: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 2,
    href: 'https://nodejs.org/en',
    label: 'Nodejs',
    icon: FaNodeJs,
  },
  {
    id: 3,
    href: 'https://expressjs.com/',
    label: 'Express',
    icon: SiExpress,
  },
  {
    id: 4,
    href: 'https://www.postgresql.org/',
    label: 'PostgreSQL',
    icon: BiLogoPostgresql,
  },
  {
    id: 5,
    href: 'https://www.mongodb.com/',
    label: 'MongoDB',
    icon: SiMongodb,
  },
]
