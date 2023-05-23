import React from 'react';
import { BordersWrapper, OutlinedSquare, SectionTitle } from '../elements';
import { skills } from '../../data';
import RandomShapes from '../RandomShapes';
const Skills = () => {
  console.log('hi', Object.keys(skills));
  return (
    <section className='flex flex-col md:flex-row'>
      <div className='flex-1'>
        <SectionTitle>Skills</SectionTitle>
        <RandomShapes />
      </div>
      <div className='flex flex-col gap-8 sm:flex-row-reverse flex-wrap md:w-1/2 flex-[2] items-start'>
        {Object.keys(skills).map((skill) => (
          <SkillsSet skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

const SkillsSet = ({ skill }) => (
  <BordersWrapper className='sm:w-72 h-auto'>
    <h3 className='capitalize'>{skill}</h3>
    <BordersWrapper>
      {skills[skill].map((skill) => (
        <span>{skill}</span>
      ))}
    </BordersWrapper>
  </BordersWrapper>
);
