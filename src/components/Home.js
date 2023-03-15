import React from "react";
import Header from "./Header";
import Products from "./products/Products";
import NewProduct from "./newproduct/NewProduct";
import Slider from "./slider/Slider";
import SlidingCards from "./slidingCards/SlidingCards";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <SlidingCards />
      <NewProduct />
    </>
  );
};

export default Home;
