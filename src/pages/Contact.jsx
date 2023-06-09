import React from 'react';
import ContactSection from '../components/sections/Contact';
import { PageTitle, SectionTitle } from '../components/elements';
import { accounts } from '../data';

const Contact = () => {
  return (
    <main>
      <PageTitle>Contact me</PageTitle>
      <ContactSection hideTitle />
      <section className='mx-auto max-w-6xl'>
        <SectionTitle>My accounts</SectionTitle>
        <p>
          {accounts.map((account) => (
            <Account key={account.title} account={account} />
          ))}
        </p>
      </section>
    </main>
  );
};

const Account = ({ account }) => <a href={account.link}>{account.title} </a>;

export default Contact;
