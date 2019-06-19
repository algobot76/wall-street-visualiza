import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ names }) => {
  return (
    <div className="column is-4-tablet is-3-desktop is-2-widescreen">
      <aside className="menu">
        <p className="menu-label">Company List</p>
        <ul className="menu-list">
          {names.map((name, idx) => (
            <li key={idx}>
              <a>{name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

Sidebar.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;
