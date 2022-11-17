import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types/types";

interface CartState {
  cart: IBookDetails[];
  total: number;
  isLoading: boolean;
  error: null | string;
}

const initialState: CartState = {
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, { payload }: PayloadAction<IBookDetails>) => {
      const result = state.cart.find((book) => book.isbn13 === payload.isbn13);

      if (!result) {
        const cartBook = {
          ...payload,
        };
        state.cart.push(cartBook);
        state.total += +cartBook.price.slice(1, 6);
      }
    },
    removeBookFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((book) => book.isbn13 !== payload);
    },
  },
});

export default cartSlice.reducer;
