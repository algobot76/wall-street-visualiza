import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import NewsModal from '../components/NewsModal';
import { fetchCompanies } from '../actions';

class Visualiza extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { names, company, data } = this.props;
    return (
      <div className="section has-background-light">
        <div className="columns">
          <Sidebar names={names} />
          <div className="column">
            <Chart title={company} data={data} />
            <NewsModal className="column" title="News" content="foo bar" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  names: state.companies.names,
  company: state.companies.selectedCompany,
  data: state.companies.data
});

export default connect(mapStateToProps)(Visualiza);
