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
    const { names, company, data, startIndex, endIndex } = this.props;
    const filteredData = data.find(item => item.company === company);
    let startDate = '';
    let endDate = '';
    if (filteredData) {
      startDate = filteredData.prices[startIndex]['date'];
      endDate = filteredData.prices[endIndex]['date'];
    }

    return (
      <div className="section has-background-light">
        <div className="columns">
          <Sidebar names={names} />
          <div className="column">
            <Title>{company}</Title>
            <NewsModal
              buttonName="News"
              title={
                startDate && endDate
                  ? `News from ${startDate} to ${endDate}`
                  : 'News'
              }
            />
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
  data: state.companies.data,
  startIndex: state.chart.startIndex,
  endIndex: state.chart.endIndex
});

export default connect(mapStateToProps)(Visualiza);
