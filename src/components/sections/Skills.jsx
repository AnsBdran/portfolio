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
        <img src='assets/skills.png' alt='skills illustration' />
      </div>
      <div className='flex flex-[2] flex-col flex-wrap items-start gap-8 sm:flex-row-reverse md:w-1/2'>
        {Object.keys(skills).map((skill) => (
          <SkillsSet skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

const SkillsSet = ({ skill }) => (
  <BordersWrapper className='h-auto sm:w-72'>
    <h3 className='px-3 py-2 text-xl font-bold capitalize'>{skill}</h3>
    <BordersWrapper className='p-2'>
      {skills[skill].map((skill) => (
        <span key={skill}>| {skill} |</span>
      ))}
    </BordersWrapper>
  </BordersWrapper>
);
