import React from "react";
import { Hero } from "../Hero/Hero";
import { Popular } from "../Popular/Popular";
import { Offers } from "../Offers/Offers";
import product_data from "../Assets/data";
import product_collection from "../Assets/new_collections";
import { Subscribe } from "../Subscribe/Subscribe";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular title={"Popular in Women"} product={product_data} />
      <Offers />
      <Popular title={"New Collection"} product={product_collection} />
      <Subscribe />
    </div>
  );
};
