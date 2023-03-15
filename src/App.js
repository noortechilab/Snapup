import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import ProductScreen from "./components/products/ProductScreen";
import SearchPage from "./components/searchPage/SearchPage";
import { Provider } from "react-redux";
import store from "./store/Store";
function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
          </Routes>
          <Footer />
        </Provider>
      </Router>
    </>
  );
}

export default App;
