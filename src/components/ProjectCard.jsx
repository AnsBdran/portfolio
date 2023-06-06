import { BordersWrapper } from './elements';
import Button from './Button';

import { BsPlay, BsGithub } from 'react-icons/bs';

const ProjectCard = () => {
  return (
    <BordersWrapper>
      <img
        src='projects/puzzle.png'
        alt='card matching puzzle'
        className=' border-blue-300'
      />
      <BordersWrapper className='p-2'>
        <p>hi, you, css, html</p>
      </BordersWrapper>
      <div className='p-2'>
        <h3>Card Matching</h3>
        <p>try to get all the cards matched!</p>
        <div className='mt-3 flex gap-4'>
          <a href='#'>
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
