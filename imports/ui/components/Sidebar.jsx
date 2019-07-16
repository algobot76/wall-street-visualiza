import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectCompany } from '../actions';

// TODO: Make Scroll's max-height equal to height of menu
const Scroll = styled.div`
  max-height: 30rem;
  overflow: auto;
`;

function Sidebar({ names }) {
  const dispatch = useDispatch();
  const selectedCompany = useSelector(state => state.companies.selectedCompany);

  return (
    <div className="column is-4-tablet is-3-desktop is-2-widescreen">
      <aside className="menu">
        <p className="menu-label">Company List</p>
        <Scroll>
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
        </Scroll>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;
