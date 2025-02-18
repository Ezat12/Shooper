import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

export const Hero = () => {
  return (
    <div className="hero ">
      <div className="container">
        <div className="hero-content">
          <h2>New Arrivals Only</h2>
          <div>
            <div className="hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="" />
            </div>
            <span>Collections</span>
            <span>For everyone</span>
          </div>
          <div className="content-btn">
            <button>
              Latest collection <img src={arrow_icon} alt='' />
            </button>
          </div>
        </div>
        <div className="image">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
}
