import React from 'react';
import { BordersWrapper } from './elements';
import Button from './Button';

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
        <div className='flex gap-4 mt-3'>
          <a href='#' className='btn'>
            Demo
          </a>
          <a href='#' className='btn'>
            Repo
          </a>
        </div>
      </div>
    </BordersWrapper>
  );
};

export default ProjectCard;
