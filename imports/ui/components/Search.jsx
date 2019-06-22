import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { fetchCompanies, search, selectCompany } from '../actions';

class Search extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  state = {
    inputOnFocus: false,
    inputValue: ''
  };

  handleInputOnFocus() {
    this.setState({
      inputOnFocus: true
    });
  }

  handleInputOnBlur() {
    this.setState({
      inputOnFocus: false
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  clearInputValue() {
    this.setState({
      inputValue: ''
    });
  }

  render() {
    let input;
    const { dispatch, names } = this.props;
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
                        ref={node => (input = node)}
                        type="text"
                        className="input"
                        placeholder="Look for a company?"
                        onChange={e => this.updateInputValue(e)}
                        onFocus={() => this.handleInputOnFocus()}
                        onBlur={() => this.handleInputOnBlur()}
                      />
                      <span className="icon is-left">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`dropdown-menu is-15rem-wide ${
                      this.state.inputOnFocus ? '' : 'is-display-none-important'
                    }`}
                  >
                    <div className="dropdown-content">
                      {names
                        .filter(name =>
                          name.includes(this.state.inputValue.toUpperCase())
                        )
                        .map((name, idx) => (
                          <div key={idx} className="dropdown-item">
                            <a
                              onMouseDown={() => {
                                input.value = '';
                                this.clearInputValue();
                                dispatch(selectCompany(name));
                              }}
                            >
                              {name}
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  names: state.companies.names
});

export default connect(mapStateToProps)(Search);
