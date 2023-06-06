import { allSkills } from '../data';

const AllSkills = () => {
  console.log(allSkills);
  return (
    <section>
      {allSkills.map((skill) => (
        <Skill key={skill.title} skill={skill} />
      ))}
      all skills are done
    </section>
  );
};

const Skill = ({ skill }) => (
  <div>
    {skill.icon}
    <h3>{skill.title}</h3>
  </div>
);

export default AllSkills;
