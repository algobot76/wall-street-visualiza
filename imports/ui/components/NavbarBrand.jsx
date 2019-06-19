import React from 'react';
import PropTypes from 'prop-types';

const NavbarBrand = ({ logo }) => {
  return (
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src={logo} />
      </a>
    </div>
  );
};

NavbarBrand.propTypes = {
  logo: PropTypes.string
};

export default NavbarBrand;
