import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RouterRoot } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./firebase";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterRoot />
      </BrowserRouter>
    </Provider>
  );
}
