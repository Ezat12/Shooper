import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = (props) => {
  const product = props.product;

  return (
    <div className="item mb-4">
      <div className="image">
        <Link to={`/product/${product.id}`}>
          <img style={{ width: "100%" }} src={product.image} alt="" />
        </Link>
      </div>
      <p className="title mb-1">{product.name}</p>
      <div className="price">
        <span style={{ marginRight: "20px", fontWeight: "bold" }}>
          {product.new_price}$
        </span>
        <span style={{ textDecoration: "line-through" }}>
          {product.old_price}$
        </span>
      </div>
    </div>
  );
};

export default Item;
