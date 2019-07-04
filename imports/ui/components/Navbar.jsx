import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

function Navbar({ logo }) {
  return (
    <nav className="navbar has-shadow is-fixed-top">
      <Link to={'/'}>
        <NavbarBrand logo={logo} />
      </Link>
      <NavbarMenu />
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string
};

export default Navbar;
