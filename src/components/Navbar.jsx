import React from 'react';
import './Navbar.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(()=>{
        gsap.to(".home",{
            
        })
    })
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand</div>
      <ul className="navbar-links">
        <li><a className='home' href="#home">Home</a></li>
        <li><a className='about' href="#about">About</a></li>
        <li><a className='services' href="#services">Services</a></li>
        <li><a className='contact' href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
