import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Styles } from "./styles";
import { BookModel } from "../../models";

interface Props {
  card: BookModel;
}

export const BookCard = ({ card }: Props) => (
  <Styles>
    <Card style={{ width: "18rem" }} key={card.isbn13} as="li">
      <div className="cover-card-img-top">
        <Card.Img variant="top" src={card.image} />
      </div>

      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <div className="card-buttons">
          <Button variant="link">
            <NavLink to={"/selectedbook/" + card.isbn13}>Details...</NavLink>
          </Button>
          <Button variant="warning">{card.price}</Button>
        </div>
      </Card.Body>
    </Card>
  </Styles>
);
