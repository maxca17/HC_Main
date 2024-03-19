import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', userDetails);
    // Here you would typically send userDetails to your backend to register the user
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            name="username" 
            value={userDetails.username} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={userDetails.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={userDetails.password} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
