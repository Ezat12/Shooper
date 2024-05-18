import React from "react";
import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe pt-5">
      <div className="container">
        <div className="info-subscribe">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to Our newletter and stay update</p>
          <form>
            <input className="email" type="email" placeholder="Your Email id" />
            <input className="submit" type="submit" value={"Subscribe"} />
          </form>
        </div>
      </div>
    </div>
  );
};
