import React from "react";
import "./Popular.css";
// import product_data from "../Assets/data";
import Item from "../Item/Item";

export const Popular = (props) => {
  return (
    <div className="populer py-4">
      <div className="container">
        <h1>{props.title}</h1>
        <div className="row my-5">
          {props.product.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-12 col-md-6">
              <Item product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
