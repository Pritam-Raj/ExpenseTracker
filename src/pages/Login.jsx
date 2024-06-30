import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);

  // const toggleForm = () => {
  //   setIsLogin(!isLogin);
  // };

  // const [value, setValue] = useState('');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    // <div className="form-container">
    //   <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
    //   <form>
    //     {/* Common fields for both login and signup */}
    //     {isLogin && (
    //       <div className='login-div'>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="text"
    //             name="text"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Username</label>
    //         </div>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="password"
    //             name="password"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Password</label>
    //         </div>
    //       </div>         
    //     )}
        

    //     {/* Specific fields for signup */}
    //     {!isLogin && (
    //       <div className='signup-div'>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="text"
    //             name="text"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Username</label>
    //         </div>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="email"
    //             name="email"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Email</label>
    //         </div>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="password"
    //             name="password"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Password</label>
    //         </div>
    //         <div className="input-group">
    //           <input
    //             required
    //             type="password"
    //             name="password"
    //             autoComplete="off"
    //             className="input"
    //             value={value}
    //             onChange={handleChange}
    //           />
    //           <label className="user-label">Confirm Password</label>
    //         </div>
    //       </div>    
    //     )}

    //     {/* Buttons for login and signup */}
    //     <div className="input-group">
    //       <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
    //     </div>
    //   </form>

    //   {/* Toggle between login and signup */}
    //   <p>
    //     {isLogin ? "Don't have an account? " : "Already have an account? "}
    //     <span className="toggle-link" onClick={toggleForm}>
    //       {isLogin ? 'Sign Up here' : 'Login here'}
    //     </span>
    //   </p>
    // </div>

    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="" 
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
            placeholder="" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <div className="forgot">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button className="sign" type="submit" onClick={handleSubmit}>Sign in</button>
      </form>
      <p className="signup">Don't have an account?
        <a rel="noopener noreferrer" href="#">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
