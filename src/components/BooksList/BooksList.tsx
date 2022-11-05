import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import { Styles } from "./styles";
import { useInput } from "../../hooks/useInput";
import { BookModel } from "../../models";
import { BookCard } from "../BookCard/BookCard";
import { Search } from "../Search/Search";

interface IProps {
  url: string;
}

export const BooksList = ({ url }: IProps) => {
  const [cards, setCards] = useState<BookModel[]>([]);
  const inputText = useInput();
  const [isLoading, setIsLoading] = useState(true);

  function fetchCards() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setCards(data.books))
      .finally(() => {
        setIsLoading(false);
      });
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
        {isLoading ? (
          <div className="spinner-cover d-flex" style={{ height: "100vh" }}>
            <Spinner
              className="d-flex m-auto align-items-center"
              animation="grow"
              variant="primary"
            />
          </div>
        ) : (
          <>
            <Search {...inputText} />
            <ul className="card-list">
              {filteredBooks.map((item) => (
                <BookCard card={item} key={item.isbn13} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Styles>
  );
};
