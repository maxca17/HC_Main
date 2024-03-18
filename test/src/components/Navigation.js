// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/users">Users</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navigation;
