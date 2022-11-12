import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import { Styles } from "./styles";
import { useInput } from "../../hooks/useInput";
import { BookCard } from "../BookCard/BookCard";
import { Search } from "../Search/Search";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchBooks } from "../../store/features/booksSlice";

interface IProps {
  url: string;
}

export const BooksList = ({ url }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector((state) => state.books);
  // const [cards, setCards] = useState<BookModel[]>([]);
  const inputText = useInput();
  // const [isLoading, setIsLoading] = useState(true);

  // function fetchCards() {
  //   fetch(url, { method: "GET" })
  //     .then((response) => response.json())
  //     .then((data) => setCards(data.books))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filteredBooks = books.books?.filter(
    (item: { title: string; subtitle: string }) =>
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
              {filteredBooks?.map((item: any) => (
                <BookCard card={item} key={item.isbn13} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Styles>
  );
};
