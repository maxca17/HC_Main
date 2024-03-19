import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  // Example function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission logic here, such as sending settings to a server
    alert('Settings saved!');
  };

  return (
    <div className="container mt-5">
      <h2>Settings</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="emailNotifications">
          <Form.Check 
            type="checkbox" 
            label="Email Notifications" 
            checked={emailNotifications} 
            onChange={(e) => setEmailNotifications(e.target.checked)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="autoUpdate">
          <Form.Check 
            type="checkbox" 
            label="Automatic Updates" 
            checked={autoUpdate} 
            onChange={(e) => setAutoUpdate(e.target.checked)} />
        </Form.Group>

        <Button variant="primary" type="submit">Save Settings</Button>
      </Form>
    </div>
  );
}

export default Settings;
