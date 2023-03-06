import React from "react";
import "./Snavbar.css";
import { Container } from "react-bootstrap";
const Snavbar = () => {
  return (
    <>
      <div class="container-1 bg-dark">
        <Container>
          <form
            action="https://www.google.com/search"
            method="get"
            class="search-bar"
            traget="_blank"
          >
            <input type="text" placeholder="search any thing" name="q" />
            <button type="submit">
              {" "}
              <i class="fas fa-search"></i>
            </button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Snavbar;
