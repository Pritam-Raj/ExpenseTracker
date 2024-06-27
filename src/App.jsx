import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Navbar from './components/Navbar';
import './App.css'

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
      <Navbar />
      <main>
        <section id="home">
          <h1>Home Section</h1>
          <p>Welcome to the home page!</p>
        </section>
        <section id="about">
          <h1>About Section</h1>
          <p>Learn more about us here.</p>
        </section>
        <section id="services">
          <h1>Services Section</h1>
          <p>Check out our services.</p>
        </section>
        <section id="contact">
          <h1>Contact Section</h1>
          <p>Get in touch with us.</p>
        </section>
      </main>
    </div>
  )
}

export default App