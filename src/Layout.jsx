import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <main className='flex-1 px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
