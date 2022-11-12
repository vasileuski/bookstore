import React from "react";
import { NavLink } from "react-router-dom";
import { Styles } from "./style";

export const Page404 = () => {
  return (
    <Styles>
      <h1>Oooops...</h1>
      <h2>Page not found (we will create it later)</h2>
      <p>
        Try to check links on our <NavLink to={"/"}>Main page </NavLink>
      </p>
      <p className="big">404</p>
    </Styles>
  );
};
