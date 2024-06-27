import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
import Navbar from './components/Navbar.jsx';
import './App.css'
import {Home } from './pages/Home.jsx';
// import {Login} from './pages/Login.jsx';
import {History} from './pages/History.jsx';

const App = () => {
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x: 1000,
  //     duration: 2,
  //     delay: 1
  //   })
  // })
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/history" element={<History/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App