import React from "react";
import { Button, Card } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

import { Styles } from "./styles";
import { IBook } from "../../types/types";

interface Props {
  card: IBook;
}

export const CartBookCard = ({ card }: Props) => {
  return (
    <Styles>
      <Card className="cart">
        <div className="cart__card">
          <Card.Img variant="top" src={card.image} className="cart__card-img" />
          <Card.Text className="cart__card-title">
            {card.title}
            <Card.Text className="cart__card-price">{card.price}</Card.Text>
            <Card.Text className="cart__card-subtitle">{card.subtitle}</Card.Text>
          </Card.Text>
          <Button variant="danger" className="cart__card-button">
            <XLg></XLg>
          </Button>
        </div>

        <Card.Body className="cart__card-mb">
          <Card.Text className="cart__card-title-mb">{card.title}</Card.Text>
          <Card.Text className="cart__card-price-mb">{card.price}</Card.Text>
          <Button variant="danger" className="cart__card-button-mb">
            <XLg></XLg>
          </Button>
        </Card.Body>
      </Card>
    </Styles>
  );
};
