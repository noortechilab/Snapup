import React from "react";
import Header from "./Header";
import Products from "./products/Products";
import NewProduct from "./newproduct/NewProduct";
import Slider from "./slider/Slider";
const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <NewProduct />
    </>
  );
};

export default Home;
