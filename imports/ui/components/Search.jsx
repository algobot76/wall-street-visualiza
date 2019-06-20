import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { search } from '../actions';

const Search = ({ dispatch }) => {
  let input;
  return (
    <div className="navbar-item">
      <div className="level">
        <div className="level-right">
          <div className="level-item">
            <form
              onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                  return;
                }
                dispatch(search(input.value));
                input.value = '';
              }}
            >
              <div className="field has-addons">
                <div className="control has-icons-left">
                  <input
                    ref={node => (input = node)}
                    type="text"
                    className="input"
                    placeholder="Search..."
                  />
                  <span className="icon is-left">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
                <div className="control">
                  <button className="button is-dark">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Search);
