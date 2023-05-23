import React from 'react';
import { SectionTitle } from '../elements';
import Button from '../Button';

const About = () => {
  return (
    <div>
      <SectionTitle>About me</SectionTitle>
      <div>
        <p>Hello there, it's me</p>
        <p>
          I'm a self-taught front-end developer based in Kyiv, Ukraine. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>
        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <Button>Read more --&gt;</Button>
      </div>
      <div>
        <img src='assets/hand_on_head.png' alt='putting his hand on his head' />
      </div>
    </div>
  );
};

export default About;
