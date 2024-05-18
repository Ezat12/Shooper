import React, { useState } from "react";
import upload_area from "../assets/upload_area.svg";
import "./AddProduct.css";

function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetilse, setProductDetiles] = useState({
    name: "",
    new_price: "",
    old_price: "",
    category: "women",
    image: "",
  });

  const changeImages = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandeler = (e) => {
    setProductDetiles({ ...productDetilse, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    const product = productDetilse;
    let data = new FormData();

    data.append("product", image);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => (product.image = data.product));

    await fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="add-products">
      <div className="form-add-product">
        <div className="input-field">
          <p>Product Title</p>
          <input
            value={productDetilse.name}
            name="name"
            onChange={changeHandeler}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="input-field-price">
          <div className="input-field">
            <p>Price</p>
            <input
              value={productDetilse.old_price}
              name="old_price"
              onChange={changeHandeler}
              type="text"
              placeholder="Type here"
            />
          </div>
          <div className="input-field">
            <p>Offer Price</p>
            <input
              value={productDetilse.new_price}
              onChange={changeHandeler}
              name="new_price"
              type="text"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="product-category">
          <div className="input-field">
            <p>Product Category</p>
            <select
              value={productDetilse.category}
              onChange={changeHandeler}
              name="category"
            >
              <option>mens</option>
              <option>women</option>
              <option>kids</option>
            </select>
          </div>
        </div>
        <div className="image-field">
          <label htmlFor="image-field">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
            />
          </label>
          <input onChange={changeImages} type="file" id="image-field" hidden />
        </div>
        <div className="btn">
          <button onClick={() => addProduct()}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
