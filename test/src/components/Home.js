// src/components/Home.js
import React from 'react';
import './Home.css'; // Assuming you'll create a CSS file for the Home component

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Platform</h1>
      <p>This is the starting point of your amazing journey with us. Explore our features and offerings.</p>
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Description of feature 1.</li>
          <li>Feature 2: Description of feature 2.</li>
          <li>Feature 3: Description of feature 3.</li>
        </ul>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>We are a team dedicated to providing the best experience for our users. Learn more about our mission and values.</p>
      </section>
      
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions? We would love to hear from you. Reach out to us through our contact page.</p>
      </section>
    </div>
  );
}

export default Home;
