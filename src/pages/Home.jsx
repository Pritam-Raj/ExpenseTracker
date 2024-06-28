import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import heroimg from '../assets/heroimg5new.png';
import Typed from 'typed.js'
// import Navbar from '../components/Navbar.jsx';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Replace this with actual logic to determine if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // const history = useHistory();

  const handleGetStarted = () => {
    // if (isLoggedIn) {
    //   history.push('/services');
    // } else {
    //   history.push('/login'); // Or the page where you want to direct non-logged-in users
    // }
  };

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['SPENDSMART'],
      typeSpeed: 50,
    };

    // Initializing the typed effect on the referenced element
    const typed = new Typed(typedElement.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* <Navbar isDarkMode={isDarkMode} /> */}
      <div className="hero-section">
        <div className="hero-content">
        <h1>Manage Your Expenses Easily With 
            <span className="brand-name">
              <div className="typed-container"><span id="element" ref={typedElement}></span></div>
            </span>
          </h1>
          <p className="typing-text">We are providing the easiest way to manage expenses. Get a full view so you know where to save. Track spending, detect fraud, and keep tabs on rising subscription costs</p>
          <button className="get-started-btn">Get Started</button>
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="hero-image">
          <img className="hero" src={heroimg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
