import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to={'/'} className="navbar-item">
          Home
        </Link>
        <Link to={'/about'} className="navbar-item">
          About
        </Link>
        <Link to={'/visualiza'} className="navbar-item">
          Visuliza
        </Link>
      </div>
      <div className="navbar-end">
        <Search />
      </div>
    </div>
  );
};

NavbarMenu.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default NavbarMenu;
