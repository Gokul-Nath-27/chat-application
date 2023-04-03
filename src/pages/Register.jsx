import React from "react";
import "../styles/register.css";
import addImg from "../assets/images/addAvatar.png"
const Register = () => {
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <h2>Register</h2>
        <form className="form">
          <label>
            Name
            <input type="text" id="name"/>
          </label>

          <label>
            Email
            <input type="email" id="email"/>
          </label>

          <label>
            Password
            <input type="password" id="password"/>
          </label>

          <label style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{width: "10%"}} src={addImg} alt="" />
            Add profile image
            <input style={{display: "none"}} type="file" id="image"/>
          </label>

          <button className="submitBtn" type="submit">Register</button>
        </form>
        <p>Already Registered <a href="#">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
