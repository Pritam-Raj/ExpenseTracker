import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <div className="forgot">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button className="sign" type="submit" onClick={handleSubmit}>Sign in</button>
      </form>
      <p className="signup">Don't have an account?
        <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;