import { Section, SectionTitle } from '../elements';
import Button from '../Button';
import AboutMeText from '../AboutMeText';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Section>
      <div>
        <SectionTitle>About me</SectionTitle>
        <AboutMeText />
        <Button>
          <Link to='about'>Read more --&gt;</Link>
        </Button>
      </div>
      <div>
        <img src='assets/about_me.png' alt="about me section's illustration" />
      </div>
    </Section>
  );
};

export default About;
