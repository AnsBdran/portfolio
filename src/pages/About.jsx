import AboutMeText from '../components/AboutMeText';
import AllSkills from '../components/AllSkills';
import { PageTitle, Section } from '../components/elements';

const About = () => {
  return (
    <main className='md:px-24'>
      <PageTitle>About</PageTitle>
      <Section className='md:flex '>
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
