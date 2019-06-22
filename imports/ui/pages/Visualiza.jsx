import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import NewsModal from '../components/NewsModal';
import { fetchCompanies } from '../actions';

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 0.25rem;
`;

class Visualiza extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { names, company, data } = this.props;
    const filteredData = data.find(item => item.company === company);

    return (
      <div className="section has-background-light">
        <div className="columns">
          <Sidebar names={names} />
          <div className="column">
            <Title>{company}</Title>
            <NewsModal buttonName="Get News" title="News" content="foo bar" />
            <Chart data={filteredData ? filteredData.prices : []} />
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
