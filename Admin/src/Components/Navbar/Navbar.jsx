import React from "react";
import logo from "../assets/nav-logo.svg";
import logo_profile from "../assets/nav-profile.svg";
import './Navbar.css';

function Navbar() {
  return (
    <divb className="navbar">
      <img src={logo} alt="" />
      <img src={logo_profile} alt="" />
    </divb>
  );
}

export default Navbar;
