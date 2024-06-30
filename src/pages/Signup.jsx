import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Login = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleConfirmpasswordChange = (e) => {
    setConfirmpassword(e.target.value);
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
      <p className="title">Signup</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </div>


        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Create a strong Password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          
        </div>



        <div className="input-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input 
            type="password" 
            name="confirmpassword" 
            id="confirmpassword" 
            placeholder="Confirm Your Password" 
            value={confirmpassword} 
            onChange={handleConfirmpasswordChange} 
          />
        </div>
        
        <button className="sign" type="submit" onClick={handleSubmit}>Create My Account</button>
      </form>
      <p className="signup">Already have an Account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
};

export default Login;