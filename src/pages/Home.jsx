import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Home;
