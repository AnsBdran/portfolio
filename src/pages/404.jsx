import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Section } from '../components/elements';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';

const Error404 = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <section className='flex-1'>
            <h1>Error 404</h1>
            <p>The page you are looking for is not found.</p>
            <div className='mt-3'>
              <Link to='/'>
                <Button>Return home</Button>
              </Link>
            </div>
          </section>
          <div className='flex-1'>
            <img src='assets/404.png' alt='404 error illustration' />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Error404;
