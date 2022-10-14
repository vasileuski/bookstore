import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { NaviBar } from "../../components/NaviBar/NaviBar";
import { SelectedBook } from "../../components/SelectedBook/SelectedBook";

export const Book = () => {
  console.log("YO");

  return (
    <>
      <NaviBar />
      <SelectedBook></SelectedBook>
      <Footer></Footer>
    </>
  );
};
