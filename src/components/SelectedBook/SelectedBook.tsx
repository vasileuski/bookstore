import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import { Button, Container, Spinner } from "react-bootstrap";
import { IBookCard } from "../../models";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

export const SelectedBook = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);
  const [card, setCard] = useState<IBookCard>();

  function fetchCards() {
    fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCard(data))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
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
          <Styles>
            <div className="selected-book">
              <Button variant="light" onClick={() => navigate(-1)}>
                <ArrowLeft className="arrow-left" />
              </Button>
              <h2>{card?.title}</h2>
              <div>
                <img src={card?.image} alt={card?.title} />
                <p>{card?.subtitle}</p>
                <Button variant="warning">{card?.price}</Button>
              </div>
            </div>
          </Styles>
        )}
      </Container>
    </>
  );
};
