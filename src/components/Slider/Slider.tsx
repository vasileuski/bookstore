import React from "react";
import { Carousel } from "react-bootstrap";
import books_1 from "../../images/books_1.jpg";
import books_2 from "../../images/books_2.jpg";
import books_3 from "../../images/books_3.jpg";

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img src={books_1} className="d-block w-100" alt="Books" />
        <Carousel.Caption>
          <h3>Take the books in your life</h3>
          <p>Check our wide selection of books</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img src={books_2} className="d-block w-100" alt="Books" />
        <Carousel.Caption>
          <h3>Enjoy every page</h3>
          <p>Be careful of our NEW arrivals</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img src={books_3} className="d-block w-100" alt="Books" />
        <Carousel.Caption>
          <h3>Find a new friend</h3>
          <p>Don't forget about your cart</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
