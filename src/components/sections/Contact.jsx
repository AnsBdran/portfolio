import { BordersWrapper, HighLighted, SectionTitle } from '../elements';
import { TbBrandTelegram } from 'react-icons/tb';
import { CiMail } from 'react-icons/ci';
const Contact = () => {
  return (
    <section>
      <SectionTitle>Contacts</SectionTitle>
      <img src='assets/contact.png' alt="contact me section's illustration" />
      <div className='flex flex-col gap-4'>
        <p>
          I'm interested in <HighLighted>freelance</HighLighted> opportunites,
          and <HighLighted>remote</HighLighted> jobs. <br /> If you have any
          question or request, please feel free to contact me.
        </p>
        <BordersWrapper className='p-2'>
          <h3 className='mb-2'>Message me here</h3>
          <p>
            <a href='https://t.me/AnsBdran' className='flex items-center gap-1'>
              Telegram <TbBrandTelegram size={20} />
            </a>
          </p>
          <p>
            <a
              href='mailto:ansbdran@hotmail.com'
              className='flex items-center gap-1'
            >
              {' '}
              ansbdran@hotmail.com <CiMail size={20} />
            </a>
          </p>
        </BordersWrapper>
      </div>
    </section>
  );
};

export default Contact;
