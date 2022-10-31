import React from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { BooksList } from "../../components/BooksList/BooksList";

export const MathBooks = () => {
  return (
    <BasicLayout>
      <BooksList url="https://api.itbook.store/1.0/search/mathematics" />
    </BasicLayout>
  );
};
