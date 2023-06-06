import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data';

const Nav = ({ className, linkClasses, closeMenu }) => {
  return (
    <nav>
      <ul className={`${className}`}>
        {navLinks.map((navLink) => (
          <NavLinkItem
            key={navLink.title}
            path={navLink.path}
            title={navLink.title}
            linkClasses={linkClasses}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

const NavLinkItem = ({ path, title, linkClasses, closeMenu }) => (
  <li>
    <NavLink to={path} className={linkClasses} onClick={closeMenu}>
      {title}
    </NavLink>
  </li>
);

export default Nav;
