import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fetchSingleProducts,
  getProductSingle,
  STATUSES,
} from "../../store/ProductSlice";
import { useParams } from "react-router-dom";
import "./ProductScreen.scss";
import { add } from "../../store/cartSlice";
import { addToCart } from "../../store/cartSlice";
import { formatPrice } from "../utils/helpers";

import Loader from "../loader/Loader";
const ProductScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);

  useEffect(() => {
    dispatch(fetchSingleProducts(id));
  }, []);
  //// sliding images v js
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);
  //////
  const [quantity, setQuantity] = useState(1);

  let discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product.price - product.price * (product.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({
        ...product,
        quantity: quantity,
        totalPrice,
        discountedPrice,
      })
    );
  };

  return (
    <>
      <motion.div
        className="about_right"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="card-wrapper-product bg-light rounded shadow">
            <div className="card-product-details">
              {/* <!-- card left --> */}
              <div className="product-imgs ">
                <div className="img-display">
                  <div className="img-showcase">
                    <img
                      src={product.images}
                      alt="shoe image"
                      className="images-proper"
                    />
                    <img
                      src={product.images}
                      alt="shoe image"
                      className="images-proper"
                    />
                    <img
                      src={product.images}
                      alt="shoe image"
                      className="images-proper"
                    />
                    <img
                      src={product.images}
                      alt="shoe image"
                      className="images-proper"
                    />
                  </div>
                </div>
                <div className="img-select">
                  <div className="img-item">
                    <a href="#" data-id="1">
                      <img
                        src={product.images}
                        alt="shoe image"
                        className="images-proper"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="2">
                      <img
                        src={product.images}
                        alt="shoe image"
                        className="images-proper"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="3">
                      <img
                        src={product.images}
                        alt="shoe image"
                        className="images-proper"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="4">
                      <img
                        src={product.images}
                        alt="shoe image"
                        className="images-proper"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- card right --> */}
              <div className="product-content">
                <h2 className="product-title">{product.title}</h2>
                <a href="#" className="product-link">
                  visit nike store
                </a>
                <h4>${product.price}</h4>
                <div className="product-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.7(21)</span>
                </div>

                <div className="product-detail">
                  <h2>about this item: </h2>
                  <p>{product.description}</p>

                  <ul>
                    <li>
                      Color: <span>Black</span>
                    </li>
                    <li>
                      Available: <span>in stock</span>
                    </li>
                    <li>
                      Category: <span>Shoes</span>
                    </li>
                    <li>
                      Shipping Area: <span>All over the world</span>
                    </li>
                    <li>
                      Shipping Fee: <span>Free</span>
                    </li>
                  </ul>
                </div>

                {/* <Amount product={product} /> */}
                <div className="d-flex ms-2 gap-4 ">
                  <div className="mt-2 fs-5 fw-bold">Quantity:</div>

                  <div className="qty-change d-flex align-items-center bg-light border border-dark gap-2 ">
                    <button
                      type="button"
                      className="qty-decrease d-flex align-items-center justify-content-center h-100 border border-dark"
                      style={{ backgroundColor: "#e5e4e2" }}
                      onClick={decreaseQty}
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <div className="qty-value d-flex align-items-center justify-content-center fw-bold fs-4 ">
                      {quantity}
                    </div>

                    <button
                      type="button"
                      className="qty-increase d-flex align-items-center justify-content-center h-100 border border-dark"
                      style={{ backgroundColor: "#e5e4e2" }}
                      onClick={increaseQty}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  {product.stock === 0 ? (
                    <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
                      out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="purchase-info ">
                  {/* <Link to={`/cart/${product.id}`}> */}
                  <button
                    type="button"
                    className="btn"
                    style={{ background: "black" }}
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                  >
                    Add to Cart <i className="fas fa-shopping-cart"></i>
                  </button>
                  {/* </Link> */}
                  <button
                    type="button"
                    className="btn"
                    style={{ background: "red" }}
                  >
                    Buy Now
                  </button>
                </div>

                <div className="social-links">
                  <p className="mt-3 fw-bold fs-5">Share At : </p>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default ProductScreen;
