import React from "react";
import drop_down from "../Assets/dropdown_icon.png";
import "./Css/ShowCaatogre.css";
import all_data from "../Assets/all_product";
import Item from "../Item/Item";

export const ShopCategore = (props) => {
  return (
    <div className="shop-categore">
      <div className="container">
        <img className="w-100 my-3" src={props.banner} alt="" />
        <div className="info mb-5">
          <div className="info-show">
            <span className="show">Showing 1-12 </span>
            <span>out of 36 products</span>
          </div>
          <div className="sort">
            <button>Sort by</button>
            <img src={drop_down} alt="" />
          </div>
        </div>
        <div className="row">
          {all_data.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              {item.category === props.categore ? (
                <Item product={item} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
