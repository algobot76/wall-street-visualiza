import React from 'react';
import PropTypes from 'prop-types';

const NavbarBrand = ({ logo }) => {
  return (
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src={logo} />
      </div>
    </div>
  );
};

NavbarBrand.propTypes = {
  logo: PropTypes.string
};

export default NavbarBrand;
