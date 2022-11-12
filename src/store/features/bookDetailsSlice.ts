import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { booksAPI } from "../../services/booksAPI";
import { IBookDetails } from "../../types/types";

interface BookDetails {
  bookDetails: IBookDetails;
  isLoading: boolean;
  error: null | string;
}

const initialState: BookDetails = {
  bookDetails: {
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {
      "Chapter 2": "",
      "Chapter 5": "",
    },
  },
  isLoading: false,
  error: null,
};

const fetchBookByDetails = createAsyncThunk<
  { bookDetails: IBookDetails },
  string,
  { rejectValue: string }
>("bookDetails/fetchBookByDetails", async (isbn13, { rejectWithValue }) => {
  try {
    const bookDetails = await booksAPI.getDetailsByIsbn13(isbn13);

    return { bookDetails };
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookByDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBookByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bookDetails = payload.bookDetails;
    });
    builder.addCase(fetchBookByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;

export { fetchBookByDetails };
