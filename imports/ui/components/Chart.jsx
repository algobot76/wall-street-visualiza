import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

import Loading from './Loading';
import { updateIndices } from '../actions';

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
    const data = payload ? payload[0].payload : null;
    return (
      <div>
        <StyledTooltipLabel>Date: {label}</StyledTooltipLabel>
        {data && <StyledTooltipEntry>Open: {data.open}</StyledTooltipEntry>}
        {data && <StyledTooltipEntry>Close: {data.close}</StyledTooltipEntry>}
        {data && <StyledTooltipEntry>High: {data.high}</StyledTooltipEntry>}
        {data && <StyledTooltipEntry>Low: {data.low}</StyledTooltipEntry>}
        {data && <StyledTooltipEntry>Volume: {data.volume}</StyledTooltipEntry>}
      </div>
    );
  }
  return null;
};

function Chart({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(updateIndices(0, data.length - 1));
    }
  }, []);

  if (!data || data.length === 0) {
    return <Loading text="Loading data..." />;
  } else {
    return (
      <section className="section">
        <div className="container is-widescreen">
          <StyledLineChart width={1000} height={600} data={data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              dataKey="close"
              stroke="#292421"
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Brush
              dataKey="date"
              onChange={e => {
                dispatch(updateIndices(e.startIndex, e.endIndex));
              }}
            >
              <AreaChart>
                <CartesianGrid />
                <YAxis dataKey="close" hide domain={['auto', 'auto']} />
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
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Chart;
