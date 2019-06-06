import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Link({ name }) {
  return <Menu.Item as="a">{name}</Menu.Item>;
}

Link.propTypes = {
  name: PropTypes.string
};

export default Link;
