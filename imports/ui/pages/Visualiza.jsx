import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { fetchCompanies } from '../actions';

class Visualiza extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { names } = this.props;
    return (
      <div className="section">
        <div className="columns">
          <Sidebar names={names} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  names: state.companies.names
});

export default connect(mapStateToProps)(Visualiza);
