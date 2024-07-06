import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import History from './pages/History.jsx';
import AskAi from './pages/AskAi.jsx';
import Services from './pages/Services.jsx';
import Signup from './pages/Signup.jsx';
import Footer from './components/Footer.jsx'
import { AuthProvider } from './context/AuthContext.jsx';


const App = () => {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/askAi" element={<AskAi/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
      </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
