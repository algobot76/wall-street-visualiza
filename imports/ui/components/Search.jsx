import React from 'react';
import { connect } from 'react-redux';

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
                <div className="control">
                  <input
                    ref={node => (input = node)}
                    type="text"
                    className="input"
                    placeholder="Search..."
                  />
                </div>
                <div className="control">
                  <button className="button">Search</button>
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
