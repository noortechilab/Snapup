import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchSingleProducts,
  getProductSingle,
  STATUSES,
} from "../../store/ProductSlice";
import { useParams } from "react-router-dom";
import "./ProductScreen.scss";
import { add } from "../../store/cartSlice";
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

  ////
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <Container>
        <div className="card-wrapper-product">
          <div className="card-product-details">
            {/* <!-- card left --> */}
            <div className="product-imgs">
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
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>4.7(21)</span>
              </div>

              <div className="product-price">
                <p className="new-price">
                  Price: <span>${product.price} (5%)</span>
                </p>
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
                <div className="mt-2 fs-5">Quantity:</div>
                <button
                  onClick={increaseQty}
                  className=" mt-2 "
                  style={{ width: "2rem", height: "2rem", border: "1px solid" }}
                >
                  +
                </button>
                <div className="text-dark fs-4 mt-2">{quantity}</div>
                <button
                  onClick={decreaseQty}
                  className="mt-2 "
                  style={{ width: "2rem", height: "2rem", border: "1px solid" }}
                >
                  -
                </button>
              </div>
              <div className="purchase-info ">
                {/* <Link to={`/cart/${product.id}`}> */}
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "blue" }}
                  onClick={() => handleAdd(product)}
                >
                  Add to Cart <i className="fas fa-shopping-cart"></i>
                </button>
                {/* </Link> */}
                <button type="button" className="btn">
                  Compare
                </button>
              </div>

              <div className="social-links">
                <p>Share At: </p>
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
    </>
  );
};

export default ProductScreen;
