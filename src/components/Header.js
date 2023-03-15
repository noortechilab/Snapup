import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Snavbar from "../snavbar/Snavbar";
import { useSelector } from "react-redux";
import {
  getCartItemsCount,
  getAllCarts,
  getCartTotal,
} from "../store/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <>
      <Navbar
        bg="light"
        varinat="dark"
        className="sticky-top shadow "
        style={{ borderBottom: "red solid 1px" }}
      >
        <Container>
          <Link
            to="/ "
            className="text-decoration-none text-dark fs-3 fw-bold"
            style={{ borderBottom: "red 2px solid" }}
          >
            Snap<span style={{ color: "red" }}>Up</span>
          </Link>
          <Nav className="ms-auto gap-4 mt-2 " style={{ fontSize: "1.1rem" }}>
            <Link to="/" className="text-decoration-none text-dark fw-bold">
              Home
            </Link>
            <Link
              to="/product"
              className="text-decoration-none text-dark fw-bold"
            >
              Products
            </Link>
            <Link to="/cart" className="text-decoration-none text-dark">
              <span className="fa-solid fa-cart-shopping fs-3 "></span>
              <span className="badge badge-warning " id="lblCartCount">
                {itemsCount}
              </span>
            </Link>
            <br />
            <div className="border border-dark px-2 py-1 ">
              <input
                type="text"
                placeholder="Search items here"
                className="border-0 rounded  text-dark w-75 "
                onChange={(e) => handleSearchTerm(e)}
                style={{
                  background: "transparent",
                  border: "2px white solid",
                  outline: "none",
                }}
              />
              <Link to={`search/${searchTerm}`}>
                <i
                  className="fa-solid fa-magnifying-glass fw-bold ms-5"
                  style={{ color: "red" }}
                ></i>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
