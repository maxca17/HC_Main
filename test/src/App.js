import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Users from './components/Users';
import Settings from './components/Settings';
import InsuranceCodes from './components/InsuranceCodes';
import Financials from './components/Financials';
import Login from './components/Login'; // Assuming you have a Login component
import Register from './components/Register'; // Assuming you have a Register component
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              | <Link to="/analytics">Analytics</Link>
              | <Link to="/users">Users</Link>
              | <Link to="/settings">Settings</Link>
              | <Link to="/insurance-codes">Insurance Codes</Link>
              | <Link to="/financials">Financials</Link>
              | <button onClick={() => handleLogin(false)}>Logout</button>
            </>
          ) : (
            <>
              | <Link to="/login">Login</Link>
              | <Link to="/register">Register</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated && (
            <>
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/insurance-codes" element={<InsuranceCodes />} />
              <Route path="/financials" element={<Financials />} />
            </>
          )}
          <Route path="/login" element={<Login onLogin={() => handleLogin(true)} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
