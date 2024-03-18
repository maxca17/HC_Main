// src/components/Users.js
import React, { useState } from 'react';
import './Users.css';

const mockUserData = [
  { id: 1, name: 'John Doe', role: 'Administrator', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'User', status: 'Active' },
  { id: 3, name: 'William Johnson', role: 'Moderator', status: 'Inactive' },
  // Add more mock users as needed
];

function Users() {
  const [selectedUser, setSelectedUser] = useState(null);

  const viewUserDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="users-dashboard">
      <h2>Users</h2>
      <div className="user-list">
        {mockUserData.map(user => (
          <div key={user.id} className="user-item" onClick={() => viewUserDetails(user)}>
            <h3>{user.name}</h3>
            <p>{user.role} - {user.status}</p>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedUser(null)}>&times;</span>
            <h2>{selectedUser.name}</h2>
            <p>Role: {selectedUser.role}</p>
            <p>Status: {selectedUser.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
