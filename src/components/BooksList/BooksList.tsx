import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { IBookCard } from "../../models";
import { BookCard } from "../BookCard/BookCard";
import { Input } from "../Input/Input";
import { Styles } from "./styles";

interface IProps {
  url: string;
}

export const BooksList = ({ url }: IProps) => {
  const [cards, setCards] = useState<IBookCard[]>([]);
  const inputText = useInput();

  function fetchCards() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCards(data.books));
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const filteredBooks = cards.filter(
    (item) =>
      item.title.toLowerCase().includes(inputText.value.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(inputText.value.toLowerCase())
  );

  return (
    <Styles>
      <Container>
        <Input {...inputText} />
        <ul className="card-list">
          {filteredBooks.map((item) => (
            <BookCard card={item} key={item.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
