import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <main className='flex-1 p-2 py-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
