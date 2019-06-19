import React from 'react';

const Search = () => {
  return (
    <div className="navbar-item">
      <div className="level">
        <div className="level-right">
          <div className="level-item">
            <div className="field has-addons">
              <div className="control">
                <input type="text" className="input" placeholder="Search..." />
              </div>
              <div className="control">
                <button className="button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
