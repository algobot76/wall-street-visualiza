import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import Link from './Link';
import PropTypes from 'prop-types';

function Navbar({ menuItems }) {
  return (
    <Menu borderless fluid size="huge">
      <Container>
        {menuItems.map((item, i) => (
          <Link key={i} name={item} />
        ))}
        <Dropdown title={'fuck'} items={['a', 'b']} />
      </Container>
    </Menu>
  );
}

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
