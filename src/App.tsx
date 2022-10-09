import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RouterRoot } from "./router";

export function App() {
  return (
    <>
      <BrowserRouter>
        <RouterRoot />
      </BrowserRouter>
    </>
  );
}
