import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import booksReducer from "./features/booksSlice";
import booksSearchReducer from "./features/booksSearchSlice";
import bookDetailsReducer from "./features/bookDetailsSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    search: booksSearchReducer,
    bookDetails: bookDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
