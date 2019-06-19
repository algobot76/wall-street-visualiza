import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCompany } from '../actions';

const Sidebar = ({ dispatch, names }) => {
  return (
    <div className="column is-4-tablet is-3-desktop is-2-widescreen">
      <aside className="menu">
        <p className="menu-label">Company List</p>
        <ul className="menu-list">
          {names.map((name, idx) => (
            <li
              key={idx}
              onClick={() => {
                dispatch(selectCompany(name));
              }}
            >
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

export default connect()(Sidebar);
