
import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockUserData = [
  { id: 1, name: 'John Doe', role: 'Administrator', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'User', status: 'Active' },
  { id: 3, name: 'William Johnson', role: 'Moderator', status: 'Inactive' },
  // Add more mock users as needed
];

function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockUserData.map(user => (
            <tr key={user.id} onClick={() => viewUserDetails(user)}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Users;
