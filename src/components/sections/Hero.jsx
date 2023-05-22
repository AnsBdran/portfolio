import React from 'react';
import { HighLighted } from '../elements';

const Hero = () => {
  return (
    <section>
      <h1 className='text-3xl'>
        <HighLighted> Anas Badran</HighLighted>, Front-end Web Developer
      </h1>
      <p>I enjoy creating responsive web apps, beside other things.</p>
    </section>
  );
};

export default Hero;
