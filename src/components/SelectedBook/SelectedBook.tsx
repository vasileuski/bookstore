import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { IBookCard } from "../../models";
import { useParams } from "react-router-dom";

export const SelectedBook = () => {
  const params = useParams();

  useEffect(() => {}, []);
  const [card, setCard] = useState<IBookCard>();

  function fetchCards() {
    fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCard(data));
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <Container>
        <h2>{card?.title}</h2>
        <div>
          <img src={card?.image} alt={card?.title} />
          <p>{card?.subtitle}</p>
          <Button variant="warning">{card?.price}</Button>
        </div>
      </Container>
    </div>
  );
};
