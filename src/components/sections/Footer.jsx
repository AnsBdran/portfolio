const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t border-gray-400 p-2'>
      <section>
        <div className='text-center'>
          <p>Anas Badran</p>
          <p>Front-end Developer</p>
        </div>
        <div>
          <h3>Media</h3>
          <div>icons</div>
        </div>
      </section>
      <p>Copyright {currentYear}. Made By Anas Badran</p>
    </footer>
  );
};

export default Footer;
