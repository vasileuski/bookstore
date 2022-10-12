import React from "react";
import { BooksList } from "../../components/BooksList/BooksList";
import { NaviBar } from "../../components/NaviBar/NaviBar";

export const NewReleases = () => {
  return (
    <>
      <NaviBar />
      <BooksList url="https://api.itbook.store/1.0/new" />
    </>
  );
};
