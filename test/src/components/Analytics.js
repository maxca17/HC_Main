// src/components/Analytics.js
import React, { useState } from 'react';
import './Analytics.css';

const kpiData = [
  {
    id: 1,
    name: 'Total Claims',
    value: '1,234',
    details: 'Detailed data on total claims processed this month.',
  },
  {
    id: 2,
    name: 'Claims Approved',
    value: '1,000',
    details: 'Detailed data on claims approved this month.',
  },
  {
    id: 3,
    name: 'Claims Rejected',
    value: '234',
    details: 'Detailed data on claims rejected this month.',
  },
  {
    id: 4,
    name: 'Average Processing Time',
    value: '48 hours',
    details: 'Detailed data on average processing time for claims.',
  },
  {
    id: 5,
    name: 'Average Wait Time',
    value: '30 minutes',
    details: 'Detailed data on average wait time for customer service.',
  },
  // Add more KPIs as needed
];

function Analytics() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <div className="kpi-container">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="kpi" onClick={() => toggleExpand(kpi.id)}>
            <h3>{kpi.name}</h3>
            <p className="kpi-value">{kpi.value}</p>
            {expandedId === kpi.id && <p className="kpi-details">{kpi.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
