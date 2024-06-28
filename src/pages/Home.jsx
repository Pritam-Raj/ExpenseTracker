import React from 'react';
import './Home.css';
import heroimg from '../assets/heroimg5new.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Manage Your Expenses Easily With <span className="brand-name">SPENDSMART</span></h1>
          <p>We are providing the easiest way to manage expenses. Get a full view so you know where to save. Track spending, detect fraud, and keep tabs on rising subscription costs.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img className="hero" src={heroimg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
