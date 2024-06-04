import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log("Header");

  const { loggedInuser } = useContext(UserContext);
  console.log(loggedInuser);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="flex justify-between px-10 bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center  ">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="cart">
              <i class="fa fa-cart-shopping"></i>
              <span className="font-bold "> - ({cartItems.length}items)</span>
            </Link>
          </li>
          <button
            className="Login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {" "}
            {btnName}{" "}
          </button>
          <li className="px-4 font-bold">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
