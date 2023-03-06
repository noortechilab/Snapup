import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ephotovn.com/wp-content/uploads/2019/09/E-Commerce-Product-Photo-editing-change-color3.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ephotovn.com/wp-content/uploads/2019/09/E-Commerce-Product-Photo-editing-change-color3.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
