import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleContainerClick = () => {
    // Handle click event for the container
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="container" onClick={handleContainerClick}>
      <div className="top"></div>
      <div className="bottom"></div>
      {isSignup ? (
        <div className="center">
          <h2>Please Sign Up</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <h2>&nbsp;</h2>
          <button onClick={toggleSignup}>Go to Login</button>
        </div>
      ) : (
        <div className="center">
          <h2>Please Sign In</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <h2>&nbsp;</h2>
          <button onClick={toggleSignup}>Go to Signup</button>
        </div>
      )}
    </div>
  );
};

export default Login;
