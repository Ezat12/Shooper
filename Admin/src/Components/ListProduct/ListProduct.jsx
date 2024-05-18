import React, { useEffect, useState } from "react";
import remove_img from "../assets/cross_icon.png";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    await fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data.data.product));
  };

  const deeteProduct = async (id) => {
    await fetch(`http://localhost:5000/deleteproduct/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        getAllProduct();
      } else {
        alert("Faild");
      }
    });
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="list-products">
      <div className="list-product-content">
        <div className="product-title">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>new Price</p>
          <p>category</p>
          <p>remove</p>
        </div>
        <hr />
        <div className="content-all-product">
          {allProduct.map((product, index) => {
            return (
              <div className="content-product" key={index}>
                {product.image ? (
                  <img className="product-img" src={product.image} alt="" />
                ) : (
                  <img src="" alt="null" />
                )}
                <p>{product.name}</p>
                <span>${product.old_price}</span>
                <span>${product.new_price}</span>
                <p>{product.category}</p>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => deeteProduct(product.id)}
                  src={remove_img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
