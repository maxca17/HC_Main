import React from 'react';
import { Link } from 'react-router-dom';
// Import Bootstrap CSS in the main file where this component is used, not here

function Home() {
  return (
    <div className="container mt-5">
      <header className="jumbotron">
        <h1>Welcome to Our Healthcare Platform</h1>
        <p className="lead">Explore a comprehensive suite of healthcare management tools designed for professionals like you.</p>
        <Link to="/contact-sales" className="btn btn-primary">Contact Sales</Link>
      </header>
      
      <section className="my-5">
        <h2>Our Features</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Feature 1</h3>
                <p className="card-text">Description of feature 1 highlighting its benefits.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Feature 2</h3>
                <p className="card-text">Description of feature 2 and how it simplifies tasks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Feature 3</h3>
                <p className="card-text">Explanation of feature 3 and its impact on healthcare management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="my-5">
        <h2>About Us</h2>
        <p>We are dedicated to revolutionizing the healthcare industry with our innovative platform, designed to empower healthcare professionals and enhance patient care.</p>
      </section>
      
      <footer className="mt-5 p-3 bg-light">
        <h2>Get In Touch</h2>
        <p>Have questions or interested in learning more about our solutions? Our team is here to help.</p>
        <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
      </footer>
    </div>
  );
}

export default Home;
