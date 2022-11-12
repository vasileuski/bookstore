import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import booksReducer from "./features/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
