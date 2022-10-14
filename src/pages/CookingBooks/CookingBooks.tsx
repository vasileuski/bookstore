import React from "react";
import { BooksList } from "../../components/BooksList/BooksList";
import { Footer } from "../../components/Footer/Footer";
import { NaviBar } from "../../components/NaviBar/NaviBar";

export const CookingBooks = () => {
  return (
    <>
      <NaviBar />
      <BooksList url="https://api.itbook.store/1.0/search/cooking" />
      <Footer />
    </>
  );
};
