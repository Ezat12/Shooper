import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import card_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import drop_down from "../Assets/dropdown_icon.png";

function getActive(num) {
  let Allli = document.querySelectorAll(".nav-ul li");

  Allli.forEach((el, index) => {
    num === index ? el.classList.add("active") : el.classList.remove("active");
  });
}

export const Navbar = () => {
  const products_All = useSelector((state) => state.Card);

  // <img className="drop-down" src={drop_down} alt="" />
  return (
    <div className="navbar ">
      <div className="container">
        <div className="nav-icon">
          <img src={logo} alt="" />
          <p>SHOOPER</p>
        </div>

        <ul className="nav-ul">
          <li onClick={() => getActive(0)} className="active">
            <Link to={"/"}>Shop</Link>
          </li>
          <li onClick={() => getActive(1)}>
            <Link to={"/mens"}>Men</Link>
          </li>
          <li onClick={() => getActive(2)}>
            <Link to={"/womens"}>Women</Link>
          </li>
          <li onClick={() => getActive(3)}>
            <Link to={"/kids"}>Kids</Link>
          </li>
        </ul>
        <div div className="nav-login-card">
          {!localStorage.getItem("token") ? (
            <Link to={"/loginSingup"}>
              <button>Login</button>
            </Link>
          ) : (
            <Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.replace("/");
                }}
              >
                LogOut
              </button>
            </Link>
          )}
          <Link to={"/card"}>
            <img src={card_icon} alt="" />
          </Link>
          <p className="counter">{products_All.length}</p>
        </div>
      </div>
    </div>
  );
};
