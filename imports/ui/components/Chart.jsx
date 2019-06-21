import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  AreaChart,
  Area
} from 'recharts';
import styled from 'styled-components';

import { updateIndices } from '../actions';

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const StyledLineChart = styled(LineChart)`
  margin: 0 auto;
`;

const StyledTooltipLabel = styled.p`
  font-weight: bold;
  color: $black;
`;

const StyledTooltipEntry = styled.p`
  font-weight: lighter;
  color: $darkgray;
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const data = payload[0].payload;
    return (
      <div>
        <StyledTooltipLabel>Date: {label}</StyledTooltipLabel>
        <StyledTooltipEntry>Open: {data.open}</StyledTooltipEntry>
        <StyledTooltipEntry>Close: {data.close}</StyledTooltipEntry>
        <StyledTooltipEntry>High: {data.high}</StyledTooltipEntry>
        <StyledTooltipEntry>Low: {data.low}</StyledTooltipEntry>
        <StyledTooltipEntry>Volume: {data.volume}</StyledTooltipEntry>
      </div>
    );
  }
  return null;
};

class Chart extends Component {
  componentDidMount() {
    const { dispatch, data } = this.props;
    if (data) {
      dispatch(updateIndices(0, data.length - 1));
    }
  }

  render() {
    const { dispatch, title, data } = this.props;
    return (
      <section className="section">
        <div className="container is-widescreen">
          <Title className="title">{title}</Title>
          <StyledLineChart
            width={1000}
            height={600}
            data={data}
            margin={{ top: 10, right: 100, bottom: 50, left: 50 }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              dataKey="close"
              stroke="#292421"
              activeDot={{ r: 5 }}
              isAnimationActive={true}
              animationEasing={'linear'}
            />
            <Brush
              dataKey="date"
              onChange={e => {
                dispatch(updateIndices(e.startIndex, e.endIndex));
              }}
            >
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area dataKey="close" stroke="#696969" fill="#292421" />
              </AreaChart>
            </Brush>
          </StyledLineChart>
        </div>
      </section>
    );
  }
}

Chart.propTypes = {
  dispatch: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default connect()(Chart);
