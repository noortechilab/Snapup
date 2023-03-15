import React from "react";
// import "./ProductList.scss";
import Products from "../products/Products";
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  // console.log(products, "okokok");
  return (
    <>
      <div className="">
        {products.map((product) => (
          <div
            className=" bg-light shadow  rounded"
            key={product.id}
            style={{ width: "30rem" }}
          >
            <div className=" d-flex flex-column align-items-center justify-content-center product-item my-3  rounded">
              <div className="product">
                <Link
                  to={`/product/${product.id}`}
                  className="text-decoration-none"
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    // style={{ width: "30rem" }}
                  />
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
              <div className="title pt-4 pb-1 fs-5 fw-bold">
                {product.title}
              </div>
              <div className="d-flex align-content-center justify-content-center">
                <span className="fas fa-star fs-5"></span>
                <span className="fas fa-star fs-5"></span>
                <span className="fas fa-star fs-5"></span>
                <span className="fas fa-star fs-5"></span>
                <span className="fas fa-star fs-5"></span>
              </div>
              <div className="price fs-5 fw-bold">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
