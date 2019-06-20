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
    setTimeout(() => {
      this.setState({
        inputOnFocus: true
      });
    }, 0);
  }

  handleInputOnBlur() {
    setTimeout(() => {
      this.setState({
        inputOnFocus: false
      });
    }, 0);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const { dispatch, names } = this.props;
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
                  <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                      <div className="control has-icons-left">
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
                    {this.state.inputOnFocus && (
                      <div className="dropdown-menu">
                        <div className="dropdown-content">
                          {names
                            .filter(name =>
                              name.includes(this.state.inputValue.toUpperCase())
                            )
                            .map((name, idx) => (
                              <div key={idx} className="dropdown-item">
                                <a
                                  onClick={() => {
                                    dispatch(selectCompany(name));
                                  }}
                                >
                                  {name}
                                </a>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
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
  }
}

const mapStateToProps = state => ({
  names: state.companies.names
});

export default connect(mapStateToProps)(Search);
