import { BordersWrapper, HighLighted, Icon } from '../elements';
import Button from '../Button';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiOutlineMail, HiDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h1 className='mb-3 text-3xl leading-10'>
          Hello, I'm <HighLighted thick={true}>Anas Badran</HighLighted>, a
          Front-end Web Developer
        </h1>
        <p className='mb-4'>
          I enjoy creating responsive web apps, beside other things.
        </p>
        <div className='flex gap-8'>
          <Button>
            Contact me <HiOutlineMail size={20} />
          </Button>
          <Button>
            My resume <HiDownload />
          </Button>
        </div>
      </div>
      <div>
        <img src='assets/hero.png' alt='hacker' className='w-full lg:hidden' />
        <img
          src='assets/hacker-lg.png'
          alt='hacker'
          className='hidden w-full lg:block'
        />
      </div>
      <figure className='flex flex-col gap-[1px]'>
        <BordersWrapper className='relative px-2 py-2'>
          <blockquote>
            <p>With great power comes great electricity bill</p>
          </blockquote>
          <FaQuoteLeft className='absolute left-4 top-[-8px]' />
          <FaQuoteLeft className='absolute bottom-[-8px] right-4 rotate-180' />
        </BordersWrapper>
        <BordersWrapper className='self-end px-2 py-[2px]'>
          <figcaption>- Dr. Who</figcaption>
        </BordersWrapper>
      </figure>
    </section>
  );
};

export default Hero;
