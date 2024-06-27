import React from 'react';
import {Link} from 'react-router-dom' 
import './Navbar.css';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const Navbar = () => {
    // useGSAP(()=>{
    //     gsap.to(".home",{
            
    //     })
    // })
  return (
    <div className='navbar'>
        <Link className="home" to="/">Home</Link>
        <Link className="login" to="/login">Login</Link>
        <Link className="history" to="/history">History</Link>   
     </div>
  );
};

export default Navbar;
