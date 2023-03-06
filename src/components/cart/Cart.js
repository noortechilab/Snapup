import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log(products, "lall");
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="shopping-cart">
        {/* <!-- Title --> */}
        <div className="title">Shopping Bag</div>
        {products.map((product, index) => (
          <div key={index}>
            {/* <!-- Product #1 --> */}
            <div className="item">
              <div className="buttons">
                <span className="delete-btn"></span>
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src={product.images} alt="" style={{ width: "7rem" }} />
              </div>

              <div className="description">
                <span>{product.title}</span>
              </div>

              <div className="quantity">
                <button
                  className="plus-btn button-cart-screen"
                  type="button"
                  name="button"
                >
                  <img
                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                    alt=""
                  />
                </button>
                <input type="text" name="name" value="1" />
                <button
                  className="minus-btn button-cart-screen"
                  type="button"
                  name="button"
                >
                  <img
                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                    alt=""
                  />
                </button>
              </div>

              <div className="total-price">${product.price}</div>
              <button
                className="btn btn-dark  mt-3"
                style={{ width: "8rem", height: "2.5rem", marginLeft: "6rem" }}
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* dmsmdks */}
      <div
        className="bg-light d-flex rounded border"
        style={{ width: "950px", marginLeft: "30.2em", height: "7rem" }}
      >
        <div className="">
          <button className="clear-cart-btn">clear cart</button>
        </div>

        <div className=" ms-auto">
          <div className=" fs-5 pe-5 mt-3"> Total (1) items:$15000</div>
          <button className="checkout-cart-btn">check out</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
