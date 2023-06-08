import { BsDiscord, BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Section } from '../elements';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 32;

  return (
    <footer className='border-t border-gray-400 p-2'>
      <Section className='justify-between md:flex'>
        <div className='text-center'>
          <p className='font-bold'>Anas Badran</p>
          <p>Front-end Developer</p>
        </div>
        <div className='text-center'>
          <h3 className='mt-4 text-lg'>Media</h3>
          <div className='footer_icons mb-3 mt-1 flex justify-center gap-4 text-white'>
            <a href='https://disord.com' target='_blank' rel='noreferrer'>
              <BsDiscord size={iconSize} />
            </a>
            <a
              href='https://www.github.com/ansbdran'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub size={iconSize} />
            </a>
            <a href='https://t.me/ansbdran' target='_blank' rel='noreferrer'>
              <FaTelegramPlane size={iconSize} />
            </a>
          </div>
        </div>
      </Section>
      <p className='-mt-12 mb-4 text-center'>
        Copyright {currentYear}. Made By Anas Badran
      </p>
    </footer>
  );
};

export default Footer;
