import { SectionTitle } from '../elements';
import Button from '../Button';
import AboutMeText from '../AboutMeText';

const About = () => {
  return (
    <div>
      <SectionTitle>About me</SectionTitle>
      <div>
        <AboutMeText />
        <Button>Read more --&gt;</Button>
      </div>
      <div>
        <img src='assets/about_me.png' alt="about me section's illustration" />
      </div>
    </div>
  );
};

export default About;
