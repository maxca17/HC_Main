import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Users from './components/Users';
import Settings from './components/Settings';
import InsuranceCodes from './components/InsuranceCodes';
import Financials from './components/Financials'; // Import Financials component
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/analytics">Analytics</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/settings">Settings</Link> |
        <Link to="/insurance-codes">Insurance Codes</Link> |
        <Link to="/financials">Financials</Link> {/* Add link to Financials */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/insurance-codes" element={<InsuranceCodes />} />
        <Route path="/financials" element={<Financials />} /> {/* Add route for Financials */}
      </Routes>
    </div>
  );
}

export default App;
