import React from 'react';
import { BordersWrapper, SectionTitle } from '../elements';

const Contact = () => {
  return (
    <section>
      <div>
        <SectionTitle>Contacts</SectionTitle>
        <p>I'm interested in freelance opportunites, and remote jobs.</p>
        <p>
          If you have any question or request, please feel free to contact me.
        </p>
      </div>
      <BordersWrapper>
        <h3>Message me here</h3>
        <p>Telegram</p>
        <p>ansbdran@hotmail.com</p>
      </BordersWrapper>
    </section>
  );
};

export default Contact;
