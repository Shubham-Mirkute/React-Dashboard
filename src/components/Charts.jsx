import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { data, pdata, COLORS } from './Data';


export const Charts = () => {
  const [selectedOption, setSelectedOption] = useState('option2');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className='charts'>
      <div className='Bar-chart'>
        <header className='Bar-header'>
          <div className='left'>
            <p style={{ color: "black" }}>Overview </p>
            <p style={{ color: 'grey' }}>Monthly Earning</p>
          </div>
          <div className='right'>
            <select className='Dropdown' value={selectedOption} onChange={handleDropdownChange}>
              <option value="option1">Monthly</option>
              <option value="option2">Quarterly</option>
              <option value="option3">Annualy</option>
            </select>
          </div>
        </header>
        <ResponsiveContainer>
        <BarChart  width={600} height={200} data={data}>
          <XAxis dataKey="month" axisLine={false}  />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 10, 10]} />
        </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='Pie-chart'>
      <header className='Pie-header'>
          <div className='left'>
            <p style={{ color: "black" }}>Customers </p>
            <p style={{ color: 'grey' }}>Customers that buy Products</p>
          </div>
        </header>
        <div className='Pie-chart Pie-center-data'><span className='Pie-center-percent'>65%</span> total new <br/>Customers</div>
        <ResponsiveContainer >
          <PieChart width={200} height={200}>
            <Pie
              data={pdata}
              cx="50%"
              cy="50%"
              innerRadius={60} 
              outerRadius={90} 
              dataKey="value"
            >
              {pdata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
              ))}
          

            </Pie>
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};
