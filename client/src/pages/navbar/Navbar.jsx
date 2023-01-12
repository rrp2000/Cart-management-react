import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  let isLoggedIn = localStorage.getItem("isLoggedIn")


  return isLoggedIn ? (
    <nav className="navbar-container">
      <div onClick = {()=>navigate("/products")} className="navbar-logo">
        Shopping<span>.io</span>
      </div>
      <div className="navbar-links">
        <Link to = {"/products"}>Products</Link>
        <Link to = {"/"} onClick = {()=>localStorage.clear()}>Logout</Link>

        <img
          onClick={()=>navigate("/profile")}
          className="navbar-profile"
          src="/images/default-profile.png"
          alt="profile"
        />
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;
