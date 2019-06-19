import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {
  render() {
    const { logo } = this.props;
    return (
      <nav className="navbar has-shadow">
        <Link to={'/'}>
          <NavbarBrand logo={logo} />
        </Link>
        <NavbarMenu />
      </nav>
    );
  }
}

Navbar.propTypes = {
  logo: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
