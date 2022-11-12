import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { fetchBooksSearch } from "../../store/features/booksSearchSlice";
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

  useEffect(() => {
    dispatch(fetchBooksSearch({ value: debouncedValue }));
  }, [debouncedValue, dispatch]);

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
