// Icon imports
import { HiCommandLine } from 'react-icons/hi2';
import { IoLogoCss3 } from 'react-icons/io';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiStyledcomponents,
  SiReactrouter,
} from 'react-icons/si';
import { FaReact, FaSass } from 'react-icons/fa';
import { TbBrandRedux, TbBrandNextjs } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';

// ====================================================
export const skills = {
  languages: ['JavaScript', 'TypeScript'],
  tools: ['VS code', 'Figma'],
  'markup and styling': ['HTML', 'CSS', 'Sass', 'Tailwindcss'],
  frameworks: ['React', 'Nextjs', 'Vue'],
  libraries: ['Redux', 'axios', 'react-router', 'styled-components'],
  others: [
    'Git and GitHub',
    'Regular expressions',
    'Native Arabic and Fluent in English',
  ],
};

export const navLinks = [
  { path: '/', title: 'Home' },
  {
    path: 'projects',
    title: 'My works',
  },
  {
    path: 'about',
    title: 'About me',
  },
  {
    path: 'contact',
    title: 'Contact me',
  },
];

// projects
export const projects = [
  {
    img: 'puzzle.png',
    title: 'Card Matching Puzzle',
    usedSkills: ['React', 'Tailwindcss'],
    desc: '',
    demo: '',
    repo: '',
  },
];

export const allSkills = [
  {
    title: 'HTML',
    icon: <AiFillHtml5 />,
  },
  {
    title: 'CSS',
    icon: <IoLogoCss3 />,
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    title: 'React.js',
    icon: <FaReact />,
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    title: 'Tailwindcss',
    icon: <SiTailwindcss />,
  },
  {
    title: 'Redux',
    icon: <TbBrandRedux />,
  },
  {
    title: 'Styled-components',
    icon: <SiStyledcomponents />,
  },
  {
    title: 'Next.js',
    icon: <TbBrandNextjs />,
  },
  {
    title: 'Sass',
    icon: <FaSass />,
  },
  {
    title: 'React router',
    icon: <SiReactrouter />,
  },
  {
    title: 'Git',
    icon: <BsGit />,
  },
  {
    title: 'GitHub',
    icon: <AiFillGithub />,
  },
  {
    title: 'Figma',
    icon: <FiFigma />,
  },
  {
    title: 'Command Line',
    icon: <HiCommandLine />,
  },
];
