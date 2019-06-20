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
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{
                borderColor: 'blue',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)'
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: 'black' }}
              offset={10}
            />
            <Line
              dataKey="price"
              stroke="#292421"
              activeDot={{ stroke: '#292421', strokeWidth: 15, r: 2 }}
              isAnimationActive={true}
              animationBegin={0}
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
                <Area dataKey="price" stroke="#696969" fill="#292421" />
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
