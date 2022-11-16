import React, { useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

import { Styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchBookByDetails } from "../../store/features/bookDetailsSlice";
import { getDetailsByIsbn13 } from "../../store/selectors/bookDetails";

export const SelectedBook = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error, bookDetails } = useAppSelector(getDetailsByIsbn13);

  useEffect(() => {
    dispatch(fetchBookByDetails(params.isbn13!));
  }, [dispatch, params.isbn13]);

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
        <div className="selected-book">
          <Button variant="light" className="arrow-button" onClick={() => navigate(-1)}>
            <ArrowLeft className="arrow-left" />
          </Button>
          <h2 className="selected-book_title">{bookDetails.title}</h2>

          <div className="selected-book_img-cover">
            <img className="selected-book_img" src={bookDetails.image} alt={bookDetails.title} />
          </div>
          <p className="selected-book_subtitle">{bookDetails.subtitle}</p>
          <h2 className="selected-book_price">{bookDetails.price}</h2>
          <Button variant="warning" className="selected-book_btn-cart">
            Add to cart <span className="selected-book_btn-cart-price">{bookDetails.price}</span>
          </Button>
        </div>
      </Container>
    </Styles>
  );
};
