import React from "react";
import { Card, Button } from "react-bootstrap";
import { IBookCard } from "../../models";
import { Styles } from "./styles";

interface BookCardProps {
  card: IBookCard;
}

export const BookCard = ({ card }: BookCardProps) => {
  return (
    <Styles>
      <Card style={{ width: "18rem" }} key={card.isbn13} as="li">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.subtitle}</Card.Text>
          <Button variant="link">Details...</Button>
          <Button variant="warning">{card.price}</Button>
        </Card.Body>
      </Card>
    </Styles>
  );
};