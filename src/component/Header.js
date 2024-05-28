import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="Login" onClick={()=>{
             btnName === "Login" ?  setBtnName("Logout") : setBtnName ("Login") 
            }}> {btnName} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;