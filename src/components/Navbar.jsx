import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from "../assets/expenses.png";
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logoImg} alt="logo" />
      <div className='nav-links'>
        <Link className="home" to="/">Home</Link>
        <Link className="history" to="/history">History</Link>
        <Link className="askAi" to="/askAi">Ask AI</Link>
      </div>
      <Link className="login" to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
