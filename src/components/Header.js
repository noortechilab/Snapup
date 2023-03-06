import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Snavbar from "../snavbar/Snavbar";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart);
  console.log(items, "lksdkos");
  return (
    <>
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Link
            to="/ "
            className="text-decoration-none text-white fs-3 fw-bold"
          >
            Ecommerce
          </Link>
          <Nav className="ms-auto gap-4 " style={{ fontSize: "1.1rem" }}>
            <Link to="/" className="text-decoration-none text-white">
              Home
            </Link>
            <Link to="/product" className="text-decoration-none text-white">
              Products
            </Link>
            <Link to="/cart" className="text-decoration-none text-white">
              Cart : {items.length}
            </Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Snavbar /> */}
    </>
  );
};

export default Header;
