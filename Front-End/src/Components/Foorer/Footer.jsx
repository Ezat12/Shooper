import React from 'react'
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-icon">
          <img src={logo} alt="" />
          <h1>Shopper</h1>
        </div>
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Officer</li>
          <li>About</li>
          <li>Contant</li>
        </ul>
        <div className="plateform">
          <img src={instagram_icon} alt="" />
          <img src={pintester_icon} alt="" />
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <p className='text-center'>Copyright @ 2032 All Right Reserved.</p>
    </div>
  );
}
