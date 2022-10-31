import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import { Styles } from "./styles";
import { useInput } from "../../hooks/useInput";
import { IBookCard } from "../../models";
import { BookCardModel } from "../BookCardModel/BookCardModel";
import { Search } from "../Search/Search";

interface IProps {
  url: string;
}

export const BooksList = ({ url }: IProps) => {
  const [cards, setCards] = useState<IBookCard[]>([]);
  const inputText = useInput();
  const [isLoading, setIsLoading] = useState(true);

  function fetchCards() {
    fetch(url)
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
                <BookCardModel card={item} key={item.isbn13} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Styles>
  );
};
