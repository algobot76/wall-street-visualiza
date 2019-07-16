import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// TODO: Adjust max-height
const Scroll = styled.div`
  max-height: 24rem;
  overflow: auto;
`;

const FullName = styled.span`
  color: #696969;
`;

import { selectCompany } from '../actions';

function Search() {
  const dispatch = useDispatch();

  const names = useSelector(state => state.companies.names).sort((a, b) =>
    a.symbol.localeCompare(b.symbol)
  );

  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);
  return (
    <div className="navbar-item">
      <div className="level">
        <div className="level-right">
          <div className="level-item">
            <div className="field">
              <div className="dropdown is-active">
                <div className="dropdown-trigger">
                  <div className="control has-icons-left is-15rem-wide">
                    <input
                      ref={inputRef}
                      type="text"
                      className="input"
                      placeholder="Look for a company?"
                      onChange={e => setInputValue(e.target.value)}
                      onFocus={() => setInputOnFocus(true)}
                      onBlur={() => setInputOnFocus(false)}
                    />
                    <span className="icon is-left">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </div>
                </div>
                <div
                  className={`dropdown-menu is-15rem-wide ${
                    inputOnFocus ? '' : 'is-display-none-important'
                  }`}
                >
                  <Scroll>
                    <div className="dropdown-content">
                      {names
                        .filter(
                          name =>
                            name.symbol.includes(inputValue.toUpperCase()) ||
                            name.fullName
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                        )
                        .map((name, idx) => (
                          <div key={idx} className="dropdown-item">
                            <a
                              onMouseDown={() => {
                                inputRef.current.value = '';
                                setInputValue('');
                                dispatch(selectCompany(name.symbol));
                              }}
                            >
                              {name.symbol}
                              <br />
                              <FullName>({name.fullName})</FullName>
                            </a>
                          </div>
                        ))}
                    </div>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
