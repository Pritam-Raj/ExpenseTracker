import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    if (!username || !password) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setScale(0.9);
      const response = await axios.post(`http://localhost:3000/auth/login`, {
        username,
        password,
      });
      if (response?.data?.message === "User does not exist") {
        toast.error("Username does not Exist");
      } else if (response?.data?.message === "Username or Password Invalid") {
        toast.error("Wrong Username or Password. Try Again!!");
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Error: Unable to connect to the server.");
    } finally {
      setScale(1);
    }
  };

  return (
    <div className="main-div">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
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
          <button className="signin" type="submit">
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
