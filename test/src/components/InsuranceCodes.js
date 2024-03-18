// src/components/InsuranceCodes.js
import React, { useState } from 'react';
import './InsuranceCodes.css';

const insuranceCodes = [
  { code: 'A100', description: 'General Checkup', company: 'Medicare' },
  { code: 'B200', description: 'Dental Cleaning', company: 'Blue Cross' },
  { code: 'C300', description: 'Orthopedics', company: 'Aetna' },
  // Add more items with different companies as needed
];

function InsuranceCodes() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCodes = insuranceCodes.filter(
    item =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCompanyColor = (company) => {
    switch (company) {
      case 'Medicare': return 'lightblue';
      case 'Blue Cross': return 'lightgreen';
      case 'Aetna': return 'lightcoral';
      // Define more cases for other companies
      default: return 'lightgrey';
    }
  };

  return (
    <div className="insurance-codes">
      <h2>Insurance Codes</h2>
      <input
        type="text"
        placeholder="Search by service or company..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="codes-grid">
        {filteredCodes.map((item, index) => (
          <div key={index} className="code-item" style={{ backgroundColor: getCompanyColor(item.company) }}>
            <span className="code">{item.code}</span>
            <span className="description">{item.description}</span>
            <span className="company">{item.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsuranceCodes;
