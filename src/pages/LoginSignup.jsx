import React, { useState } from 'react';
import './LoginSignup.css'; // Assuming you have a CSS file for styling

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form>
        {/* Common fields for both login and signup */}
        {isLogin && (
          <div>
            <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your Username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
          </div>
         
        )}
        

        {/* Specific fields for signup */}
        {!isLogin && (
          <div>
            <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="Email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="Password" placeholder="Enter your email" />
        </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          </div>
          
        )}

        {/* Buttons for login and signup */}
        <div className="form-group">
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </div>
      </form>

      {/* Toggle between login and signup */}
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="toggle-link" onClick={toggleForm}>
          {isLogin ? 'Sign Up here' : 'Login here'}
        </span>
      </p>
    </div>
  );
};

export default Login;
