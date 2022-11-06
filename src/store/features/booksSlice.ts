import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { booksAPI } from "../../services/booksAPI";
import { IBooks } from "../../types/types";

interface BooksState {
  books: any;
  isLoading: boolean;
  error: "0" | string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: "0",
};

const fetchBooks = createAsyncThunk<
  IBooks[],
  undefined,
  { rejectValue: string }
>("books/fetchBooks", async (_, { rejectWithValue }) => {
  try {
    return booksAPI.getNew();
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = "0";
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default booksSlice.reducer;

export { fetchBooks };
