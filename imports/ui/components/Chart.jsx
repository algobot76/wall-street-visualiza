import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, AreaChart, Area} from 'recharts';
//import { scalePow, scaleLog } from 'd3-scale';

const data = [
  { date: 'Dec 02', price: 109.9 },
  { date: 'Dec 05', price: 109.11 },
  { date: 'Dec 06', price: 109.95 },
  { date: 'Dec 07', price: 111.03 },
  { date: 'Dec 08', price: 112.12 },
  { date: 'Dec 09', price: 113.95 },
  { date: 'Dec 12', price: 113.3 },
  { date: 'Dec 13', price: 115.19 },
  { date: 'Dec 14', price: 115.19 },
  { date: 'Dec 15', price: 115.82 },
  { date: 'Dec 16', price: 115.97 },
  { date: 'Dec 19', price: 116.64 },
  { date: 'Dec 20', price: 116.95 },
  { date: 'Dec 21', price: 117.06 },
  { date: 'Dec 22', price: 116.29 },
  { date: 'Dec 23', price: 116.52 },
  { date: 'Dec 27', price: 117.26 },
  { date: 'Dec 28', price: 116.76 },
  { date: 'Dec 29', price: 116.73 },
  { date: 'Dec 30', price: 115.82 },
];

const initialState = {data};

class Chart extends Component {
  state = initialState;
  render() {
    const {data} = this.state;
    return (
      <div className="line-charts">
        <p style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Stock Market Chart (2016)</p>
        <div className="line-chart-wrapper">
          <LineChart
            width={1000} height={600} data={data}
            margin={{ top: 10, right: 100, bottom: 50, left: 50 }}>
            <CartesianGrid vertical={false} horizontal={false} strokeDasharray="5 5" />
            <XAxis dataKey="date" label={{ value: 'Time', position: 'insideBottom', offset: 0}}/>
            <YAxis domain={['auto', 'auto']} label={{ value: 'Stock Price', angle: -90, position: 'insideLeft', offset: -7  }}  />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{
                borderColor: 'blue',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: 'black' }}
            offset={'10'}/>
            <Line dataKey="price" stroke="#ff7300" activeDot={{ stroke: 'red', strokeWidth: 12, r: 2 }} isAnimationActive={true} animationBegin={'0'} animationEasing={'linear'}
            />
            <Brush dataKey="date" startIndex={0} >
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
              </AreaChart>
            </Brush>
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Chart;
