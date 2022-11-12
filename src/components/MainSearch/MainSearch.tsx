import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { fetchBooksBySearch, getDebounceSearchValue } from "../../store/features/booksSearchSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getSearchBooks } from "../../store/selectors/booksSearchSelector";
import { IBook } from "../../types/types";
import { BookCard } from "../BookCard/BookCard";
import { Styles } from "../MainSearch/styles";
import { Search } from "../Search/Search";

export const MainSearch = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, booksBySearch } = useAppSelector(getSearchBooks);
  const [cards, setCards] = useState<IBook[]>([]);
  const inputText = useInput();
  const debouncedValue = useDebounce(inputText.value);

  // function fetchCards() {
  //   fetch(`https://api.itbook.store/1.0/search/${inputText.value}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.error && data.error !== "0") {
  //         return setCards([]);
  //       }

  //       setCards(data.books);
  //     });
  // }

  useEffect(() => {
    dispatch(getDebounceSearchValue(debouncedValue));
  }, [inputText.value, dispatch]);

  console.log(debouncedValue);

  return (
    <Styles>
      <Container>
        <Search {...inputText} />
        <ul className="card-list">
          {booksBySearch.map((item: IBook) => (
            <BookCard card={item} key={item.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
