import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useInput } from "../../hooks/useInput";
import { IBookCard } from "../../models";
import { BookCardModel } from "../BookCardModel/BookCardModel";
import { BooksList } from "../BooksList/BooksList";
import { Styles } from "../MainSearch/styles";
import { Search } from "../Search/Search";

export const MainSearch = () => {
  const [cards, setCards] = useState<IBookCard[]>([]);
  const inputText = useInput();

  function fetchCards() {
    console.log(inputText);

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

  // const filteredBooks = cards.filter(
  //   (item) =>
  //     item.title.toLowerCase().includes(inputText.value.toLowerCase()) ||
  //     item.subtitle.toLowerCase().includes(inputText.value.toLowerCase())
  // );

  useEffect(() => {
    fetchCards();
  }, [inputText.value]);

  return (
    <Styles>
      <Container>
        <Search {...inputText} />
        {}
        <ul className="card-list">
          {cards.map((item) => (
            <BookCardModel card={item} key={item.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
