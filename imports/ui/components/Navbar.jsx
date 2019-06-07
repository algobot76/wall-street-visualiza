import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import Link from './Link';
import Logo from './Logo'
import PropTypes from 'prop-types';

function Navbar({ logoPath, menuItems }) {
  return (
    <Menu borderless fluid size="huge">
      <Container>
        <Logo path={logoPath}/>
        {menuItems.map((item, i) => (
          <Link key={i} name={item} />
        ))}
        <Dropdown title={'Company List'} items={['Tesla inc.', 'Apple inc.', 'Alibaba inc.', 'Aurora Cannabis inc.', 'General Motor inc.']} />
      </Container>
    </Menu>
  );
}

Navbar.propTypes = {
  logoPath: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
