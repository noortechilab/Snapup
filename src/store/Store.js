import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../src/store/cartSlice";
import productReducer from "../../src/store/ProductSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
