

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <h2 className="mb-4">Analytics Dashboard</h2>
      <div className="row">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="col-md-4 mb-3">
            <div className="card h-100" onClick={() => toggleExpand(kpi.id)}>
              <div className="card-body">
                <h5 className="card-title">{kpi.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{kpi.value}</h6>
                {expandedId === kpi.id && <p className="card-text">{kpi.details}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;

