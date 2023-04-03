import React from "react";
import "../styles/register.css";
const Login = () => {
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <h2>Login</h2>
        <form className="form">
            
          <label>
            Email
            <input type="email" id="email"/>
          </label>

          <label>
            Password
            <input type="password" id="password"/>
          </label>

          <button className="submitBtn" type="submit">Login</button>
        </form>
        <p>Haven't register Yet! <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
