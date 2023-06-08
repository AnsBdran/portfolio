import {
  BordersWrapper,
  HighLighted,
  Section,
  SectionTitle,
} from '../elements';
import { TbBrandTelegram } from 'react-icons/tb';
import { CiMail } from 'react-icons/ci';
const Contact = () => {
  return (
    <Section>
      <div className='flex-1'>
        <SectionTitle>Contacts</SectionTitle>
        <img src='assets/contact.png' alt="contact me section's illustration" />
      </div>
      <div className='flex flex-1 flex-col gap-4'>
        <p>
          I'm interested in <HighLighted>freelance</HighLighted> opportunites,
          and <HighLighted>remote</HighLighted> jobs. <br /> If you have any
          question or request, please feel free to contact me.
        </p>
        <BordersWrapper className='max-w-max px-6 py-3'>
          <h3 className='mb-2'>Message me here</h3>
          <div className='flex flex-col items-start gap-2 '>
            <a
              href='https://t.me/AnsBdran'
              className='link flex items-center gap-1 '
            >
              Telegram <TbBrandTelegram size={20} />
            </a>

            <a
              href='mailto:ansbdran@hotmail.com'
              className='link flex items-center gap-1'
            >
              {' '}
              ansbdran@hotmail.com <CiMail size={20} />
            </a>
          </div>
        </BordersWrapper>
      </div>
    </Section>
  );
};

export default Contact;
