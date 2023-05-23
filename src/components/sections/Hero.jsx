import React from 'react';
import { BordersWrapper, HighLighted } from '../elements';
import Button from '../Button';

const Hero = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h1 className='text-3xl'>
          <HighLighted> Anas Badran</HighLighted>, Front-end Web Developer
        </h1>
        <p>I enjoy creating responsive web apps, beside other things.</p>
        <Button>Contact me!!</Button>
      </div>
      <div>
        <img
          src='assets/hacker-sm.png'
          alt='hacker'
          className='lg:hidden w-full'
        />
        <img
          src='assets/hacker-lg.png'
          alt='hacker'
          className='hidden lg:block w-full'
        />
      </div>
      <BordersWrapper>
        <figure>
          <blockquote>
            <p>With great power comes great electricity bill</p>
          </blockquote>
          <figcaption>- Dr. Who</figcaption>
        </figure>
      </BordersWrapper>
    </section>
  );
};

export default Hero;
