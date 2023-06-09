import { useState } from 'react';
import Sidebar from '../Sidebar';
import Nav from '../Nav';
import { Logo } from '../elements';
import { TfiMenu } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <header className='mx-auto w-full max-w-6xl'>
      <section className='flex items-center justify-between px-3 py-5'>
        <Link to='/'>
          <Logo />
        </Link>
        <Button small onClick={() => setShowMenu(true)} className='sm:hidden'>
          <TfiMenu size={24} className='block aspect-square cursor-pointer' />
        </Button>
        <div className='hidden sm:block'>
          <Nav className='flex gap-6' />
        </div>
      </section>
      <section>
        <Sidebar
          className={`-right-full w-full sm:hidden ${showMenu && 'right-0'}`}
          showHideMenu={clickMenuHandler}
          closeMenu={closeMenuHandler}
        />
      </section>
    </header>
  );
};

export default Header;
