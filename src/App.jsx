import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import History from './pages/History.jsx';
import AskAi from './pages/AskAi.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/history" element={<History />} />
          <Route path="/askAi" element={<AskAi/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
