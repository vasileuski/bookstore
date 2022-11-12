import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { IBook } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchBooks } from "../../store/features/booksSlice";
import { getBooks } from "../../store/selectors/bookSelectors";

import { Styles } from "./styles";
import { BookCard } from "../BookCard/BookCard";
import { Search } from "../Search/Search";

export const BooksList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);
  const navigate = useNavigate();
  const inputText = useInput();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filteredBooks = books.filter(
    (item: { title: string; subtitle: string }) =>
      item.title.toLowerCase().includes(inputText.value.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(inputText.value.toLowerCase()),
  );

  if (isLoading) {
    return (
      <div className="spinner-cover d-flex" style={{ height: "100vh" }}>
        <Spinner className="d-flex m-auto align-items-center" animation="grow" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Navigate to={"/pagenotfound"}></Navigate>;
  }

  return (
    <Styles>
      <Container>
        <Search {...inputText} />
        <ul className="card-list">
          {filteredBooks?.map((item: IBook) => (
            <BookCard card={item} key={item.isbn13} />
          ))}
        </ul>
      </Container>
    </Styles>
  );
};
