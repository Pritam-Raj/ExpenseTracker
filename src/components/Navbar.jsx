import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className="home" to="/">Home</Link>
      <Link className="login" to="/login">Login</Link>
      <Link className="history" to="/history">History</Link>
    </div>
  );
};

export default Navbar;
