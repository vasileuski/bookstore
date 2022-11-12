// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
// import { booksAPI } from "../../services/booksAPI";
// import { IBooks } from "../../types/types";

// interface BooksState {
//   books: any;
//   isLoading: boolean;
//   error: "0" | string;
// }

// const initialState: BooksState = {
//   books: [],
//   isLoading: false,
//   error: "0",
// };

// const fetchBooksSearch = createAsyncThunk<IBooks[], string, { rejectValue: string }>(
//   "books/fetchBooksSearch",
//   async (value, { rejectWithValue }) => {
//     try {
//       const response = await booksAPI.getSearch(value);
//       return response;
//       console.log(response);
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       return rejectWithValue(axiosError.message);
//     }
//   },
// );

// const booksSearchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchBooksSearch.pending, (state) => {
//       state.isLoading = true;
//       state.error = "0";
//     });
//     builder.addCase(fetchBooksSearch.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.books = payload;
//     });
//     builder.addCase(fetchBooksSearch.rejected, (state, { payload }) => {
//       if (payload) {
//         state.isLoading = false;
//         state.error = payload;
//       }
//     });
//   },
// });

// export default booksSearchSlice.reducer;

// export { fetchBooksSearch };

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { booksAPI } from "../../services/booksAPI";
import { IBook, IBookResponseBySearch } from "../../types/types";

interface SearchBooksState {
  booksBySearch: IBook[];
  isLoading: boolean;
  error: null | string;
  debounceSearchValue: string;
  total: string;
}

const initialState: SearchBooksState = {
  booksBySearch: [],
  isLoading: false,
  error: null,
  debounceSearchValue: "",
  total: "",
};

const fetchBooksBySearch = createAsyncThunk<
  IBookResponseBySearch,
  { query: string; page: number },
  { rejectValue: string }
>("search/fetchBooksBySearch", async ({ query, page }, { rejectWithValue }) => {
  try {
    return await booksAPI.getSearch({ query, page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getDebounceSearchValue(state, { payload }: PayloadAction<string>) {
      state.debounceSearchValue = payload;
    },

    resetDebounceSearchValue(state) {
      state.debounceSearchValue = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.books) {
        state.booksBySearch = payload.books;
        state.total = payload.total;
      }
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export { fetchBooksBySearch };

export const { getDebounceSearchValue, resetDebounceSearchValue } = searchSlice.actions;
