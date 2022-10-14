import React from "react";
import { Styles } from "./styles";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IBookCard } from "../../models";

interface BookCardProps {
  card: IBookCard;
}

export const BookCard = ({ card }: BookCardProps) => {
  return (
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
};
