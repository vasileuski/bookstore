import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
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
  const { isLoading, booksBySearch } = useAppSelector(getSearchBooks);
  const inputText = useInput();
  const debouncedValue = useDebounce(inputText.value);

  useEffect(() => {
    dispatch(fetchBooksSearch({ value: debouncedValue }));
  }, [debouncedValue, dispatch]);

  if (isLoading) {
    return (
      <div className="spinner-cover d-flex" style={{ height: "100vh" }}>
        <Spinner className="d-flex m-auto align-items-center" animation="grow" variant="primary" />
      </div>
    );
  }

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
