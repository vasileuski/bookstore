import React from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { BooksList } from "../../components/BooksList/BooksList";

export const ProgrammingBooks = () => {
  return (
    <BasicLayout>
      <BooksList />
    </BasicLayout>
  );
};
