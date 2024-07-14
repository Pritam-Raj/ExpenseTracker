import React, { useState,useContext  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/AuthContext"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import loginimage from "../assets/login2.png";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scale, setScale] = useState(1); // Add state for scale

  const [_, setCookies] = useCookies(["access_token"]);
  const { login } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail || !password) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setScale(0.9);
      const response = await axios.post(`http://localhost:3000/auth/login`, {
        userEmail,
        password,
      });
      console.log(response);
      if (response?.data?.message === "UserEmail does not exist") {
        toast.error("Invalid Email or Password");
      } else if (response?.data?.message === "Invalid Password") {
        toast.error("Invalid Email or Password");
      } else {
        setCookies("access_token", response.data.token);
        login(response.data.userID); // Call login function from AuthContext
        
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("token", response.data.token);
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 1000); // Adjust the delay time if needed
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
              value={userEmail}
              onChange={handleUserEmailChange}
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
