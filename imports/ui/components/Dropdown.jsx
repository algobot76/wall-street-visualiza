import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from './Link';
import { Dropdown as SDropdown } from 'semantic-ui-react';

import { fetchCompanies } from '../actions';

class Dropdown extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { title, names } = this.props;
    return (
      <SDropdown item text={title}>
        <SDropdown.Menu>
          {names.map((name, i) => (
            <Link key={i} name={name} />
          ))}
        </SDropdown.Menu>
      </SDropdown>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  names: state.companies.names
});

export default connect(mapStateToProps)(Dropdown);
