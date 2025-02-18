import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';
import all_Product from "../Assets/all_product";

export const Product = () => {

  const { productId } = useParams();
  const  product  = all_Product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <ProductDisplay product={product} />
    </div>
  );
}
