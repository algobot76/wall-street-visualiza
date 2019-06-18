import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import Link from './Link';
import Logo from './Logo';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

function Navbar({ logoPath, menuItems }) {
  return (
    <Menu borderless secondary size="huge">
      <Logo path={logoPath} />
      {menuItems.map((item, i) => (
        <Link key={i} name={item} />
      ))}
      <Dropdown
        title={'Company List'}
      />
      <SearchBar />
    </Menu>
  );
}

Navbar.propTypes = {
  logoPath: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
