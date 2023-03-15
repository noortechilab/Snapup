import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
} from "../../store/cartSlice";
import { Container } from "react-bootstrap";
const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);

  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className=" my-5  ">
        <div className="empty-cart d-flex justify-content-center align-items-center flex-column font-manrope">
          <img
            className="w-25"
            src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif"
            alt=""
          />

          <div className="fw-bold fs-3 text-dark text-capitalize mt-4">
            Your shopping cart is empty
            <i className="fa-solid fa-cart-shopping fs-1 ms-3"></i>
          </div>
          <Link to="/" className="">
            <button className="mt-4 bg-dark text-white border-0 w-100 py-3 text-capitalize  fs-3 px-3 ">
              Go shopping Now
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Container>
        <h1 className="fw-bold mt-5">
          Shopping <span style={{ color: "red" }}> Cart ... </span>
        </h1>
      </Container>

      <div className="cart " style={{}}>
        <div className="container ">
          <div className="cart-ctable">
            <div className="cart-chead bg-light shadow pb-3 rounded">
              <div className="cart-ctr fw-6 font-manrope fs-15">
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">S.N.</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">Product</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">Unit Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">Quantity</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">Total Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt fw-bold ">Actions</span>
                </div>
              </div>
            </div>
            <motion.div
              className="about_right"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="cart-cbody bg-light shadow pb-5 rounded">
                {carts.map((cart, idx) => {
                  return (
                    <div className="cart-ctr py-3" key={cart.id}>
                      <div className="cart-ctd p-4">
                        <span className="cart-ctxt">{idx + 1}</span>
                        <img src={cart.images} alt="" className="w-100" />
                      </div>
                      <div className="cart-ctd mt-4">
                        <span className="cart-ctxt fw-bold ">{cart.title}</span>
                      </div>
                      <div className="cart-ctd">
                        <span className="cart-ctxt fw-bold">
                          {formatPrice(cart.price)}
                        </span>
                      </div>
                      <div className="cart-ctd">
                        <div className="qty-change d-flex align-items-center">
                          <button
                            type="button"
                            className="qty-decrease d-flex align-items-center justify-content-center"
                            onClick={() =>
                              dispatch(
                                toggleCartQty({ id: cart.id, type: "DEC" })
                              )
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="qty-value d-flex align-items-center justify-content-center fw-bold">
                            {cart.quantity}
                          </div>

                          <button
                            type="button"
                            className="qty-increase d-flex align-items-center justify-content-center"
                            onClick={() =>
                              dispatch(
                                toggleCartQty({ id: cart.id, type: "INC" })
                              )
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>

                      <div className="cart-ctd">
                        <span className="cart-ctxt text-orange fw-5 fw-bold">
                          {formatPrice(cart.totalPrice)}
                        </span>
                      </div>

                      <div className="cart-ctd">
                        <button
                          type="button"
                          className="delete-btn "
                          onClick={() => dispatch(removeFromCart(cart.id))}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              className="about_right"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="cart-cfoot d-flex align-start justify-between py-3 bg-dark rounded shadow ">
                <div className="cart-cfoot-l">
                  <button
                    type="button"
                    className="clear-cart-btn text-danger fs-15 text-uppercase fw-4 mt-4"
                    onClick={() => dispatch(clearCart())}
                  >
                    <i className="fas fa-trash "></i>
                    <span className="mx-1">Clear Cart</span>
                  </button>
                </div>

                <div className="cart-cfoot-r  flex-column  ms-auto">
                  <div className="total-txt d-flex align-center ms-auto">
                    <div className="font-manrope   text-white fs-5">
                      <span style={{ color: "red" }} className="fs-4">
                        Total
                      </span>
                      ({itemsCount}) items :
                    </div>
                    <span className="text-orange fs-22 mx-2 fw-6 text-white fs-5 mt-1">
                      {formatPrice(totalAmount)}
                    </span>
                  </div>

                  <button type="button" className="checkout-btn fs-16 ">
                    Check Out
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
