import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import Link from './Link';
import Logo from './Logo'
import PropTypes from 'prop-types';

function Navbar({ menuItems }) {
  const logoPlaceHolder = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg";
  return (
    <Menu borderless fluid size="huge">
      <Container>
        <Logo path={logoPlaceHolder}/>
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
