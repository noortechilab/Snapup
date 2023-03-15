import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../src/store/cartSlice";
import productReducer from "../../src/store/ProductSlice";
import SearchReducer from "../store/searchSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    search: SearchReducer,
  },
});

export default store;
