import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectCompany } from '../actions';

const Scroll = styled.div`
  max-height: 30rem;
  overflow: auto;
`;

function Sidebar({ names }) {
  const symbols = names.map(name => name.symbol).sort();

  const dispatch = useDispatch();
  const selectedCompany = useSelector(state => state.companies.selectedCompany);

  return (
    <div className="column is-4-tablet is-3-desktop is-2-widescreen">
      <aside className="menu">
        <p className="menu-label">Company List</p>
        <Scroll>
          <ul className="menu-list">
            {symbols.map((symbol, idx) => (
              <li
                key={idx}
                onClick={() => {
                  dispatch(selectCompany(symbol));
                }}
              >
                <a className={symbol === selectedCompany ? 'is-active' : ''}>
                  {symbol}
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
  names: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
