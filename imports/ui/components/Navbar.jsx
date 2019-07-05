import React from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import PropTypes from 'prop-types';

import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

function Navbar({ logo }) {
  const { location } = useReactRouter();
  const pathname = location.pathname;

  if (pathname === '/' || pathname === '/signup') {
    document.body.classList.remove('has-navbar-fixed-top');
    return null;
  } else {
    document.body.classList.add('has-navbar-fixed-top');
    return (
      <nav className="navbar has-shadow is-fixed-top">
        <Link to={'/home'}>
          <NavbarBrand logo={logo} />
        </Link>
        <NavbarMenu />
      </nav>
    );
  }
}

Navbar.propTypes = {
  logo: PropTypes.string
};

export default Navbar;
