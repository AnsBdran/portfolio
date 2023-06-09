import AboutMeText from '../components/AboutMeText';
import AllSkills from '../components/AllSkills';
import { PageTitle, Section } from '../components/elements';

const About = () => {
  return (
    <main>
      <PageTitle>About</PageTitle>
      <Section>
        <AboutMeText className='' />
        <div className=''>
          <img src='assets/about_me.png' alt='about me illustartion' />
        </div>
      </Section>
      <AllSkills />
    </main>
  );
};

export default About;
