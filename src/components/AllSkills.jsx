import { allSkills } from '../data';
import { SectionTitle } from './elements';

const AllSkills = () => {
  console.log(allSkills);
  return (
    <section>
      <SectionTitle>The skills I have, and the tools I use</SectionTitle>
      <div className='mx-auto grid w-max grid-cols-2 items-center gap-12 sm:grid-cols-4 lg:grid-cols-5'>
        {allSkills.map((skill) => (
          <Skill key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const Skill = ({ skill }) => {
  return (
    <div className='group relative mx-auto text-center transition-all'>
      <div className='mx-auto mb-1 flex w-min items-center justify-center rounded-xl bg-white p-2 text-primary transition-all'>
        {skill.icon}
        <span className='pointer-events-none absolute top-1/3 mt-1 hidden w-max rounded-xl bg-white px-2 py-1 opacity-0 shadow-2xl transition-all group-hover:top-full group-hover:opacity-90 sm:block'>
          {skill.title}
        </span>
      </div>
      <h3 className='sm:hidden'>{skill.title}</h3>
    </div>
  );
};

export default AllSkills;
