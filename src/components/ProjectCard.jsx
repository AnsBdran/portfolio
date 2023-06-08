import { BordersWrapper } from './elements';
import Button from './Button';

import { BsPlay, BsGithub } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
  return (
    <BordersWrapper className='flex max-w-xs flex-grow flex-col'>
      <img src={`projects/${project.img}`} alt={project.title} className=' ' />
      <BordersWrapper className='p-2'>
        <p>
          {project.usedSkills.map((skill) => (
            <span> {skill}</span>
          ))}
        </p>
      </BordersWrapper>
      <div className='flex flex-1 flex-col justify-between p-2'>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className='mt-3 flex gap-4'>
          <a href={project.demo}>
            <Button sub small className=''>
              Demo
              <BsPlay size={20} />
            </Button>
          </a>
          <a href='#'>
            <Button sub small>
              Repo
              <BsGithub />
            </Button>
          </a>
        </div>
      </div>
    </BordersWrapper>
  );
};

export default ProjectCard;
