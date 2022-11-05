import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RouterRoot } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterRoot />
      </BrowserRouter>
    </Provider>
  );
}
