import React, { useState } from 'react';
//import './Dashboard.css';

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
    <div className="dashboard-component">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="setting">
          <label htmlFor="emailNotifications">Email Notifications:</label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label htmlFor="autoUpdate">Automatic Updates:</label>
          <input
            type="checkbox"
            id="autoUpdate"
            checked={autoUpdate}
            onChange={(e) => setAutoUpdate(e.target.checked)}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
