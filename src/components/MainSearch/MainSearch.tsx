import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { BookModel } from "../../models";
import { BookCard } from "../BookCard/BookCard";
import { BooksList } from "../BooksList/BooksList";
import { Styles } from "../MainSearch/styles";
import { Search } from "../Search/Search";

export const MainSearch = () => {
  const [cards, setCards] = useState<BookModel[]>([]);
  const inputText = useInput();
  const debouncedValue = useDebounce(inputText.value);

  function fetchCards() {
    fetch(`https://api.itbook.store/1.0/search/${inputText.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error && data.error !== "0") {
          return setCards([]);
        }

        setCards(data.books);
      });
  }

  useEffect(() => {
    fetchCards();
  }, [debouncedValue]);

  return (
    <Styles>
      <Container>
        <Search {...inputText} />
        <ul className="card-list">
          {cards.map((item) => (
            <BookCard card={item} key={item.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
