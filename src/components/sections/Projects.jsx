import { projects } from '../../data';
import { Section, SectionTitle } from '../elements';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <Section>
      <div className='flex-1'>
        <SectionTitle>Projects</SectionTitle>
        <div className='flex flex-wrap justify-center gap-8 '>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
