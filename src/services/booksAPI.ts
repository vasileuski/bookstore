import axios from "axios";
import { IBookDetails, IBookResponse, IBookResponseBySearch, SearchValue } from "../types/types";

enum Endpoint {
  NEW = "new",
  SEARCH = "search/",
  BOOK = "books/",
}

class BooksAPI {
  private readonly BASE_URL = process.env.REACT_APP_BOOKS_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew() {
    const { data } = await this.API.get<IBookResponse>(Endpoint.NEW);

    return data;
  }

  public async getDetailsByIsbn13(isbn13: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${isbn13}`);

    return data;
  }

  public async getSearch({ value }: SearchValue) {
    const { data } = await this.API.get<IBookResponseBySearch>(`${Endpoint.SEARCH}${value}`);

    return data;
  }
}

export const booksAPI = new BooksAPI();
