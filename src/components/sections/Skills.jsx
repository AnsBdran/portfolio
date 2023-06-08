import { BordersWrapper, Section, SectionTitle } from '../elements';
import { skills } from '../../data';

const Skills = () => {
  console.log('hi', Object.keys(skills));
  return (
    <Section>
      <div className=' flex-1 self-start'>
        <SectionTitle>Skills</SectionTitle>
        <img src='assets/skills.png' alt='skills illustration' />
      </div>
      <div className='flex flex-1 flex-row-reverse flex-wrap gap-8 lg:flex-[2] '>
        {Object.keys(skills).map((skill) => (
          <SkillsSet key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;

const SkillsSet = ({ skill }) => (
  <BordersWrapper className='h-auto max-w-max'>
    <h3 className='px-3 py-2 text-xl font-bold capitalize'>{skill}</h3>
    <BordersWrapper className='p-2'>
      {skills[skill].map((skill) => (
        <span key={skill}>| {skill} |</span>
      ))}
    </BordersWrapper>
  </BordersWrapper>
);
