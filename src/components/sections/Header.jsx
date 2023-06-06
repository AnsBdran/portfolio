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
    <header className=''>
      <section className='flex items-center justify-between px-3 py-5'>
        <Link to='/' className='flex items-center gap-2 text-xl'>
          <Logo />
          Anas Badran
        </Link>
        <Button small onClick={() => setShowMenu(true)}>
          <div className=''>
            <TfiMenu size={24} className='block aspect-square cursor-pointer' />
          </div>
        </Button>
      </section>
      <section>
        <Sidebar
          className={`-right-full w-full sm:hidden ${showMenu && 'right-0'}`}
          showHideMenu={clickMenuHandler}
          closeMenu={closeMenuHandler}
        />
        <Nav className='hidden sm:block' />
      </section>
    </header>
  );
};

export default Header;
