import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { fetchProducts } from "../../store/ProductSlice";
import { STATUSES } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const limitData = products.filter((_, index) => index < 10);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <>
      <nav className=" container navbar navbar-expand-md navbar-light bg-white">
        <div className="container-fluid p-0">
          {" "}
          <a className="navbar-brand text-uppercase fw-800" href="#">
            <span className="border-red pe-2">Sale</span>Product
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNav"
            aria-controls="myNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="fas fa-bars"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <div className="navbar-nav ms-auto">
              {" "}
              <a className="nav-link active" aria-current="page" href="#">
                All
              </a>{" "}
              <a className="nav-link" href="#">
                Women's
              </a>{" "}
              <a className="nav-link" href="#">
                Men's
              </a>{" "}
              <a className="nav-link" href="#">
                Kid's
              </a>{" "}
              <a className="nav-link" href="#">
                Accessories
              </a>{" "}
              <a className="nav-link" href="#">
                Cosmetics
              </a>{" "}
            </div>
          </div>
        </div>
      </nav>

      <Container>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Row className="w-100">
            {limitData.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <div
                  className="container bg-light shadow rounded"
                  key={product.id}
                >
                  <div className=" d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <img src={product.images[0]} alt="" />
                      </Link>
                      <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        <li className="icon">
                          <span className="fas fa-expand-arrows-alt"></span>
                        </li>
                        <li className="icon mx-3">
                          <span className="far fa-heart"></span>
                        </li>
                        <Link
                          to={`/cart/${product.id}`}
                          className="text-decoration-none"
                        >
                          <li className="icon text-dark">
                            <span className="fas fa-shopping-bag"></span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="tag bg-red">sale</div>
                    <div className="title pt-4 pb-1">{product.title}</div>
                    <div className="d-flex align-content-center justify-content-center">
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                      <span className="fas fa-star"></span>
                    </div>
                    <div className="price">$ {product.price}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </>
  );
};

export default Products;
