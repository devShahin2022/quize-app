// import { Legend } from 'chart.js';
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid , Tooltip } from 'recharts';

const BharChart = ({data}) => {

const chartData = data.data;
  return (
    
    <div className='container mt-5 mb-5'>
      <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
      width={300}
      height={50}
      data={chartData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />

      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      <Tooltip />
    </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default BharChart;
