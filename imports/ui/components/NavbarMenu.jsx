import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';

const NavbarMenu = ({ location }) => {
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
      {location.pathname === '/visualiza' && (
        <div className="navbar-end">
          <Search />
        </div>
      )}
    </div>
  );
};

export default withRouter(NavbarMenu);
