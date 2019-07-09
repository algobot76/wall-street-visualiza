import React from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Accounts } from 'meteor/accounts-base';

import Search from './Search';

function NavbarMenu() {
  const { location } = useReactRouter();
  const pathname = location.pathname;

  return (
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link
          to="/"
          className="navbar-item is-link"
          onClick={() => Accounts.logout()}
        >
          <span className="icon is-left">
            <FontAwesomeIcon icon={faDoorOpen} />
          </span>
          <span>Log out</span>
        </Link>
        <Link to={'/home'} className="navbar-item">
          Home
        </Link>
        <Link to={'/about'} className="navbar-item">
          About
        </Link>
        <Link to={'/visualiza'} className="navbar-item">
          Visuliza
        </Link>
        <Link to="/dashboard" className="navbar-item">
          Dashboard
        </Link>
      </div>
      {pathname === '/visualiza' && (
        <div className="navbar-end">
          <Search />
        </div>
      )}
    </div>
  );
}

export default NavbarMenu;
