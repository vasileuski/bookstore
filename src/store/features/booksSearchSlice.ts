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
  debouncedValue: string;
  total: string;
}

const initialState: SearchBooksState = {
  booksBySearch: [],
  isLoading: false,
  error: null,
  debouncedValue: "",
  total: "",
};

const fetchBooksSearch = createAsyncThunk<
  IBookResponseBySearch,
  { value: string },
  { rejectValue: string }
>("search/fetchBooksSearch", async ({ value }, { rejectWithValue }) => {
  try {
    return await booksAPI.getSearch({ value });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getDebounceValue(state, { payload }: PayloadAction<string>) {
      state.debouncedValue = payload;
    },

    resetDebounceValue(state) {
      state.debouncedValue = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.books) {
        state.booksBySearch = payload.books;
        state.total = payload.total;
      }
    });
    builder.addCase(fetchBooksSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export { fetchBooksSearch };

export const { getDebounceValue, resetDebounceValue } = searchSlice.actions;
