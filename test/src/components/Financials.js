import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Financials.css';

const financialData = [
  // ... existing data
];

const dummyGraphData = [
  { name: 'Jan', Revenue: 4000, Expenses: 2400 },
  { name: 'Feb', Revenue: 3000, Expenses: 1398 },
  { name: 'Mar', Revenue: 2000, Expenses: 9800 },
  // ... other months
];

function Financials() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="financials-container">
      <h2>Financial Overview</h2>
      <BarChart width={600} height={300} data={dummyGraphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Revenue" fill="#8884d8" />
        <Bar dataKey="Expenses" fill="#82ca9d" />
      </BarChart>
      {financialData.map(item => (
        <div key={item.id} className="financial-item" onClick={() => toggleExpand(item.id)}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          {expandedId === item.id && <div className="financial-details">{item.details}</div>}
        </div>
      ))}
    </div>
  );
}

export default Financials;
