import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import History from './pages/History.jsx';
import AskAi from './pages/AskAi.jsx';
import Register from './pages/Register.jsx';
import Reset from './pages/Reset.jsx';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/history" element={<History />} />
          <Route path="/askAi" element={<AskAi/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/reset' element={<Reset/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
