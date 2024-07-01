import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./Login.css";
import loginimage from "../assets/login2.png";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [scale, setScale] = useState(1); // Add state for scale

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setScale(0.9)
      const response = await axios.post(`http://localhost:3000/auth/login`, {
        username,
        password,
      });
      if (response?.data?.message == "User does not exist") {
        alert("Username does not Exist");
      } else if (response?.data?.message == "Username or Password Invalid") {
        alert("Wrong Username or Password Try Again!!");
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
    finally{
      setScale(1)
    }
    
  };

  return (
    <div className="main-div">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="sign" type="submit" onClick={handleLoginSubmit}>
            Sign in
          </button>
        </form>
        <p className="signup">
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>
      </div>
      <div className="loginimg">
        <img className="login-image" src={loginimage} alt="" />
      </div>
    </div>
  );
};

export default Login;
