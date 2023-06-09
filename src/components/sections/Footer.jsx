import { BsDiscord, BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Logo, Section } from '../elements';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 32;

  return (
    <footer className='border-t border-gray-400 px-8 py-4'>
      <section className='mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row'>
        <div className='flex items-center justify-center gap-4'>
          <Logo />{' '}
          <a href='mailto:ansbdran@hotmail.com' className='link'>
            {' '}
            ansbdran@hotmail.com
          </a>
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
      </section>
      <p className='mt-6 text-center'>
        &#169; Copyright {currentYear}. Made By Anas Badran
      </p>
    </footer>
  );
};

export default Footer;
