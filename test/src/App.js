import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Users from './components/Users';
import Settings from './components/Settings';
import InsuranceCodes from './components/InsuranceCodes';
import Financials from './components/Financials';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Pegasus </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                {isAuthenticated && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/analytics">Analytics</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/settings">Settings</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/insurance-codes">Insurance Codes</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/financials">Financials</NavLink>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-success" onClick={() => handleLogin(false)}>Logout</button>
                    </li>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
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
