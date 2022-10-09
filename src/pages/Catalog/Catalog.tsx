import React from "react";
import { BooksList } from "../../components/BooksList/BooksList";
import { NaviBar } from "../../components/NaviBar/NaviBar";

export const Catalog = () => {
  return (
    <>
      <NaviBar />
      <BooksList />
    </>
  );
};
