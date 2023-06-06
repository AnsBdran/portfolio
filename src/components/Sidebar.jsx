import { AiOutlineClose } from 'react-icons/ai';
import Nav from './Nav';
import Button from './Button';
const MobileMenu = ({ className, showHideMenu, closeMenu }) => {
  return (
    <section
      className={`${className} absolute bottom-0 top-0 z-10 bg-dark transition-all`}
    >
      <div className='flex justify-between px-3 py-5 '>
        <span className='text-xl '>Anas</span>
        <Button onClick={showHideMenu} small>
          <AiOutlineClose size={24} />
        </Button>
      </div>
      <Nav
        className='mt-12 flex flex-col'
        linkClasses='py-8 block w-full text-center hover:bg-gray-700'
        closeMenu={closeMenu}
      />
    </section>
  );
};

export default MobileMenu;
