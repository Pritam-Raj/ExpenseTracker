import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from "../assets/expenses.png";
import { FaHome, FaHistory, FaUser } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { MdMedicalServices, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img className='logo' src={logoImg} alt="logo" />
      <div className='nav-links'>
        <Link className="nav-link" to="/">
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>
        <Link className="nav-link" to="/services">
          <MdMedicalServices className="nav-icon" />
          <span className="nav-text">Services</span>
        </Link>
        <Link className="nav-link" to="/history">
          <FaHistory className="nav-icon" />
          <span className="nav-text">History</span>
        </Link>
        <Link className="nav-link" to="/askAi">
          <GiArtificialHive className="nav-icon" />
          <span className="nav-text">Ask AI</span>
        </Link>
      </div>
      <div className='toggle-login-container'>
        <button className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
          {isDarkMode ? <MdOutlineLightMode className="toggle-icon" /> : <MdOutlineDarkMode className="toggle-icon" />}
        </button>
        <Link className="nav-link login" to="/login">
          <FaUser className="nav-icon" />
          <span className="nav-text">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
