import React from "react";
import { Carousel } from "react-bootstrap";

import { Styles } from "./styles";
import books_1 from "../../images/books_1.jpg";
import books_2 from "../../images/books_2.jpg";
import books_3 from "../../images/books_3.jpg";

export const Slider = () => {
  return (
    <Styles>
      <Carousel>
        <Carousel.Item>
          <img src={books_1} className="d-block w-100" alt="Books" />
          <Carousel.Caption>
            <h2>Take books in your life</h2>
            <p>Check our wide selection of books</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={books_2} className="d-block w-100" alt="Books" />
          <Carousel.Caption>
            <h2>Enjoy every page</h2>
            <p>Be careful of our NEW arrivals</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={books_3} className="d-block w-100" alt="Books" />
          <Carousel.Caption>
            <h2>Find a new friend</h2>
            <p>Don't forget about your cart</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Styles>
  );
};
