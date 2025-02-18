import React from "react";
import "./ProductDisplay.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import start_icon from "../Assets/star_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../Rtk/Slices/CardSlice";
import toast from "react-hot-toast";

export const ProductDisplay = (props) => {
  const product = props.product;

  const cards = useSelector((state) => state.Card);

  const dispatch = useDispatch();
  console.log(cards);

  return (
    <div className="product-display">
      <div className="container">
        <div className="show-info my-4 g-3">
          HOME <img src={arrow_icon} alt="" /> SHOP{" "}
          <img src={arrow_icon} alt="" /> {product.category}{" "}
          <img src={arrow_icon} alt="" /> {product.name}
        </div>
        <div className="show-info-product">
          <div className="images">
            <div className="left-img">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="rigth-img">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="contant-show">
            <div className="title-name">{product.name}</div>
            <div className="icons">
              <img src={start_icon} alt="" />
              <img src={start_icon} alt="" />
              <img src={start_icon} alt="" />
              <img src={start_icon} alt="" />
              <img src={start_dull_icon} alt="" />
              <span>(112)</span>
            </div>
            <div className="prices">
              <div className="old-price">${product.old_price}</div>
              <div className="new-price">${product.new_price}</div>
            </div>
            <p className="light-weight">
              A lightWeight usually kented, pullover shirt,colse fitting and
              with a round necking and short sleever, worn as an undershirt or
              outer garement
            </p>
            <div className="selects mt-4">
              <span className="size">Selecy Size</span>
              <div className="select-size">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(addCard(product));
                toast.success("success add", {
                  position : "bottom-right"
                });
              }}
            >
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
