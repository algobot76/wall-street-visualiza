import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import { Dropdown as SDropdown } from 'semantic-ui-react';

function Dropdown({ title, items }) {
  return (
    <SDropdown item text={title}>
      <SDropdown.Menu>
        {items.map((item, i) => (
          <Link key={i} name={item} />
        ))}
      </SDropdown.Menu>
    </SDropdown>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};

export default Dropdown;
