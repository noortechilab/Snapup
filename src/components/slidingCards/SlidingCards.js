import React from "react";
import "./SlidingCards.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchProducts } from "../../store/ProductSlice";
const SlidingCards = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  const limitproducts = products.filter((_, index) => index < 4);

  return (
    <>
      <div className="container">
        <div className="fw-bold fs-4">
          <span className="border-red pe-2 ">Featured</span>Product
        </div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Row className="w-100">
            {limitproducts.map((product) => (
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
      </div>
    </>
  );
};
export default SlidingCards;
