// src/components/Financials.js
import React, { useState } from 'react';
import './Financials.css';

const financialData = [
  {
    id: 1,
    title: 'Revenue',
    summary: 'Total revenue for the current month',
    details: 'Detailed revenue breakdown by department...'
  },
  {
    id: 2,
    title: 'Expenses',
    summary: 'Total expenses for the current month',
    details: 'Detailed expenses breakdown by category...'
  },
  {
    id: 3,
    title: 'Insurance Claims',
    summary: 'Summary of insurance claims processed',
    details: 'Detailed claims information, including processing times and rejection rates...'
  },
  // Add more financial data as needed
];

function Financials() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="financials-container">
      <h2>Financial Overview</h2>
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
