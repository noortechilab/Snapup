const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    productSingle: [],
    productSingleStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(fetchSingleProducts.pending, (state, action) => {
        state.productSingleStatus = STATUSES.LOADING;
      })
      .addCase(fetchSingleProducts.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUSES.IDLE;
      })
      .addCase(fetchSingleProducts.rejected, (state, action) => {
        state.productSingleStatus = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (limit) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await res.json();
    return data;
  }
);

// single products
export const fetchSingleProducts = createAsyncThunk(
  "products-single/fetch",
  async (id) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();
    return data;
  }
);
// https://api.escuelajs.co/api/v1/products
export const getProductSingle = (state) => state.product.productSingle;
