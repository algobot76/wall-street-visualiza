import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCompany } from '../actions';

const Sidebar = ({ dispatch, selectedCompany, names }) => {
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
              <a className={name === selectedCompany ? 'is-active' : ''}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

Sidebar.propTypes = {
  selectedCompany: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  selectedCompany: state.companies.selectedCompany
});

export default connect(mapStateToProps)(Sidebar);
