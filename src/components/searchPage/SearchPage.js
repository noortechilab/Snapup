import React, { useEffect } from "react";
import "./SearchPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Loader from "../loader/Loader";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  setSearchTerm,
  getSearchProductsStatus,
  clearSearch,
} from "../../store/searchSlice";
import { STATUS } from "../utils/status";
const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  const searchProducts = useSelector(getSearchProducts);
  const newSearchData = searchProducts.filter((searchProducts) => {
    return searchProducts.title.includes(searchTerm);
  });
  // console.log(newSearchData, "ppppp");
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  // if (searchProducts.length === 0) {
  //   return (
  //     <div
  //       className="container"
  //       style={{
  //         minHeight: "70vh",
  //       }}
  //     >
  //       <div className="fw-5 text-danger py-5">
  //         <h3>No Products found.</h3>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <main>
      <div className="">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3 className="fw-bold">
                Search <span style={{ color: "red" }}> results </span>:
              </h3>
            </div>
            <br />
            {searchProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={newSearchData} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
