import React, { useState } from 'react';
import './InsuranceCodes.css';

// Example data structure
const cptToIcdCodes = [
  { cpt: '99214', icd: ['J02.8', 'J20.9'], description: 'Office Visit' },
  { cpt: '11100', icd: ['L72.3'], description: 'Biopsy of skin lesion' },
  { cpt: '12001', icd: ['S01.0'], description: 'Simple wound repair' },
  // Add more mappings as needed
];

function InsuranceCodes() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMappings = cptToIcdCodes.filter(
    mapping =>
      mapping.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.cpt.includes(searchTerm)
  );

  return (
    <div className="insurance-codes-container">
      <h2>CPT to ICD Cheat Sheet</h2>
      <input
        type="text"
        placeholder="Search by description or CPT code..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="codes-list">
        {filteredMappings.map((mapping, index) => (
          <div key={index} className="mapping-item">
            <div className="cpt-code"><strong>CPT:</strong> {mapping.cpt}</div>
            <div className="icd-code"><strong>ICD:</strong> {mapping.icd.join(', ')}</div>
            <div className="description"><strong>Description:</strong> {mapping.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsuranceCodes;

