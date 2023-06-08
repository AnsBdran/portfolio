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
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMicrosoftoffice,
} from 'react-icons/si';
import { FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { TbBrandRedux, TbBrandNextjs } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { MdSubtitles } from 'react-icons/md';
import { Davinci } from './components/elements';
// ====================================================
export const skills = {
  languages: ['JavaScript', 'TypeScript'],
  tools: ['VS code', 'Figma', 'Postman'],
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
    desc: 'Card matching puzzle, choose the level you want, then start matching!',
    demo: 'https://card-matching-puzzle.netlify.app/',
    repo: 'https://github.com/AnsBdran/puzzle-game',
  },
  {
    img: 'portfolio.png',
    title: 'Personal portfolio',
    usedSkills: ['React', 'Tailwindcss', 'react-router'],
    desc: 'Personal portfolio website to help you know me better',
    demo: '#',
    repo: 'https://github.com/AnsBdran/portfolio',
  },
  {
    img: 'e-commerce.png',
    title: 'E-commerce store',
    usedSkills: ['React', 'Tailwindcss', 'react-toastify', 'react-router'],
    desc: 'E-commerce web store, add the items you like to the budget and keep track of your budget',
    demo: 'https://e-commerce-anas.netlify.app/',
    repo: 'https://github.com/AnsBdran/e-commerce',
  },
];

// skills
export let iconSize = 80;
export const allSkills = [
  {
    title: 'HTML',
    icon: <AiFillHtml5 size={iconSize} />,
  },
  {
    title: 'CSS',
    icon: <IoLogoCss3 size={iconSize} />,
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript size={iconSize} />,
  },
  {
    title: 'React.js',
    icon: <FaReact size={iconSize} />,
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript size={iconSize} />,
  },
  {
    title: 'Tailwindcss',
    icon: <SiTailwindcss size={iconSize} />,
  },
  {
    title: 'Redux',
    icon: <TbBrandRedux size={iconSize} />,
  },
  {
    title: 'Styled-components',
    icon: <SiStyledcomponents size={iconSize} />,
  },
  {
    title: 'Next.js',
    icon: <TbBrandNextjs size={iconSize} />,
  },
  {
    title: 'Sass',
    icon: <FaSass size={iconSize} />,
  },
  {
    title: 'React router',
    icon: <SiReactrouter size={iconSize} />,
  },
  {
    title: 'Vue.js',
    icon: <FaVuejs size={iconSize} />,
  },
  {
    title: 'Git',
    icon: <BsGit size={iconSize} />,
  },
  {
    title: 'GitHub',
    icon: <AiFillGithub size={iconSize} />,
  },
  {
    title: 'Figma',
    icon: <FiFigma size={iconSize} />,
  },
  {
    title: 'Command Line',
    icon: <HiCommandLine size={iconSize} />,
  },
  {
    title: 'Postman',
    icon: <SiPostman size={iconSize} />,
  },
  {
    title: 'Photoshop',
    icon: <SiAdobephotoshop size={iconSize} />,
  },
  {
    title: 'Illustrator',
    icon: <SiAdobeillustrator size={iconSize} />,
  },
  {
    title: 'Davinci Resolve',
    icon: <Davinci size={iconSize} />,
  },
  {
    title: 'MS Office apps',
    icon: <SiMicrosoftoffice size={iconSize} />,
  },
  {
    title: 'Subtitles creator',
    icon: <MdSubtitles size={iconSize} />,
  },
];
