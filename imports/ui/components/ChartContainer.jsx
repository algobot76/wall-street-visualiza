import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Chart from './Chart';

const ChartContainer = ({ company, data }) => {
  return <Chart title={`Stock Prices of ${company}`} data={data} />;
};

ChartContainer.propTypes = {
  company: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  company: state.companies.selectedCompany,
  data: state.companies.data
});

export default connect(mapStateToProps)(ChartContainer);
