import React from 'react';
import PropTypes from 'prop-types';

function NavbarBrand({ logo }) {
  return (
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src={logo} />
      </div>
    </div>
  );
}

NavbarBrand.propTypes = {
  logo: PropTypes.string
};

export default NavbarBrand;
