import React, { useEffect, useState } from "react";
import { Row, Col, Container, CardGroup } from "react-bootstrap";
import { IBookCard } from "../../models";
import { BookCard } from "../BookCard/BookCard";
import { Styles } from "./styles";

export const BooksList = () => {
  const [cards, setCards] = useState<IBookCard[]>();

  function fetchCards() {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => setCards(data.books));
  }
  console.log(cards);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Styles>
      <Container>
        <CardGroup as="ul">
          {cards?.map((card) => (
            <BookCard card={card} key={card.isbn13} />
          ))}
        </CardGroup>
      </Container>
    </Styles>
  );
};
