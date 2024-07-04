import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Signup.css';
import signupimage from '../assets/login6.png';

const SignUp = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmpassword) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match. Please re-enter.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/auth/register`, {
        username,
        password,
        email
      });
      if (response?.data?.message === "UserEmail already exists") {
        toast.error("Email already exists. Please try another email.");
      } else {
        toast.success("Account created successfully. Please login.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error: Registration failed. Please try again.");
    }
  };

  return (
    <div className='main-div'>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
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
      <div className="signupimg">
        <img className='signup-image' src={signupimage} alt="" />
      </div>
    </div>  
  );
};

export default SignUp;
