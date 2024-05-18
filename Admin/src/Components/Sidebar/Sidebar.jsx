import React from 'react'
import icon_addProduct from "../assets/Product_Cart.svg"
import icon_list from "../assets/Product_list_icon.svg"
import "./Slidebar.css";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="slidebar">
      <Link to={"/addproduct"} className="add-product">
        <img src={icon_addProduct} alt="" />
        <p>Add Product</p>
      </Link>
      <Link to={"/listproduct"} className="list-product">
        <img src={icon_list} alt="" />
        <p>Product List</p>
      </Link>
    </div>
  );
}

export default Sidebar