import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

function Logo({ path }) {
  return <Image src={path} size="small" />;
}

Logo.propTypes = {
  path: PropTypes.string.isRequired
};

export default Logo;
