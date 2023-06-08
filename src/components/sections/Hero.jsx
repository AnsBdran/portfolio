import { BordersWrapper, HighLighted, Section } from '../elements';
import Button from '../Button';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiOutlineMail, HiDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <>
      <Section className='min-h-[60vh]'>
        <div className=' flex flex-1 flex-col md:gap-4'>
          <h1 className='mb-3 whitespace-nowrap '>
            <span className='bg-gradient-to-r from-lime-300 to-primary bg-clip-text font-black text-transparent'>
              Anas Badran <br />
            </span>
            <HighLighted thick>front-end</HighLighted> developer
          </h1>
          <p className='mb-4'>
            I enjoy creating responsive web apps, beside other things.
          </p>
          <div className='flex gap-8'>
            <a href='mailto:ansbdran@hotmail.com'>
              <Button>
                Send email <HiOutlineMail size={20} />
              </Button>
            </a>
            <Button>
              My resume <HiDownload />
            </Button>
          </div>
        </div>
        <div className='flex-1 '>
          <img src='assets/hero.png' alt='hero section illustration' />
        </div>
      </Section>
      <figure className='mx-auto mb-12 flex max-w-max flex-1 flex-col gap-[1px]'>
        <BordersWrapper className='relative px-8 py-2'>
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
    </>
  );
};

export default Hero;
