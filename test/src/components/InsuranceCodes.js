import React, { useState } from 'react';
import { Form, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>CPT to ICD Cheat Sheet</h2>
          <Form.Control
            type="text"
            placeholder="Search by description or CPT code..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>CPT Code</th>
                <th>ICD Codes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredMappings.map((mapping, index) => (
                <tr key={index}>
                  <td>{mapping.cpt}</td>
                  <td>{mapping.icd.join(', ')}</td>
                  <td>{mapping.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default InsuranceCodes;
