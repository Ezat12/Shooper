import React from 'react'
import "./Offers.css";
import exclusive_img from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="contant-offer">
          <div className="info-offer">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only One Bast Sellers Products</p>
            <button>Check now</button>
          </div>
          <div className="image">
            <img src={exclusive_img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
