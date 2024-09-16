import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Search from "./Search";
import {
  FaAngleDown,
  FaArrowDown,
  FaChevronDown,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { FaUpDown } from "react-icons/fa6";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInuser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {}, [btnName]);
  return (
    <div className="flex justify-between px-10 bg-white shadow-lg ">
      <div className="logo-container p-4 flex items-center">
        <Link to="/">
          <img className="w-10" src={LOGO_URL}></img>
        </Link>
        <div className="mx-10 flex items-center cursor-pointer">
          {" "}
          <span className="font-bold border-b-2 border-b-black mr-1">
            {" "}
            Other
          </span>
          {"  "}
          Ahmedabad, Gujarat, India{" "}
          <FaChevronDown className="ml-2 text-orange-600" />
        </div>
      </div>
      <div className="flex items-center  ">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">online Status: {onlineStatus ? "🟢" : "🔴"}</li> */}
          <li className="px-4 flex">
            {" "}
            <Link to={"/search"} className="flex">
              <div className="mr-2 items-center flex ">
                <FaSearch /> <span className="ml-2">Search</span>
              </div>
            </Link>
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
              {/* <i className="fa fa-cart-shopping"></i> */}
              Cart - ({cartItems.length}items)
            </Link>
          </li>

          <button
            className="Login flex items-center"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <FaUser /> <span className="mx-2"> {btnName}</span>
          </button>
          <li className="px-4 font-bold">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
