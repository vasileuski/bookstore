import React from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { BooksList } from "../../components/BooksList/BooksList";

export const NewReleases = () => {
  return (
    <BasicLayout>
      <BooksList />
    </BasicLayout>
  );
};
