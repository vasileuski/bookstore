import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { IBookCard } from "../../models";
import { BookCard } from "../BookCard/BookCard";
import { Styles } from "./styles";

interface Props {
  url: string;
}

export const BooksList = ({ url }: Props) => {
  const [cards, setCards] = useState<IBookCard[]>();

  function fetchCards() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCards(data.books));
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Styles>
      <Container>
        <ul className="card-list">
          {cards?.map((card) => (
            <BookCard card={card} key={card.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
