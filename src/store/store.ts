import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import booksReducer from "./features/booksSlice";
import booksSearchReducer from "./features/booksSearchSlice";
import bookDetailsReducer from "./features/bookDetailsSlice";
import cartReducer from "./features/cartSlice";
import { Cart } from "react-bootstrap-icons";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    search: booksSearchReducer,
    bookDetails: bookDetailsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
