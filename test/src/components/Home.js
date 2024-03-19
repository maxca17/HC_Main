import React from 'react';
import { Link } from 'react-router-dom';
//import './Home.css'; // Make sure to create and link the CSS file

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Healthcare Platform</h1>
        <p>Explore a comprehensive suite of healthcare management tools designed for professionals like you.</p>
        <Link to="/contact-sales" className="btn btn-primary">Contact Sales</Link>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Description of feature 1 highlighting its benefits.</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Description of feature 2 and how it simplifies tasks.</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Explanation of feature 3 and its impact on healthcare management.</p>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to revolutionizing the healthcare industry with our innovative platform, designed to empower healthcare professionals and enhance patient care.</p>
      </section>
      
      <footer className="contact">
        <h2>Get In Touch</h2>
        <p>Have questions or interested in learning more about our solutions? Our team is here to help.</p>
        <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
      </footer>
    </div>
  );
}

export default Home;
