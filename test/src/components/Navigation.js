import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Navigation.css';

const Navigation = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px'}}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" className="nav-link link-dark" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active" className="nav-link link-dark">
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active" className="nav-link link-dark">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active" className="nav-link link-dark">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

