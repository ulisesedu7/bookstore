import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooksFromAPI, addBookToAPI, removeBookFromAPI } from '../api/apiActions';

const BOOKS_FETCHED = 'bookstore/books/BOOKS_FETCHED';
const ASYNC_ADD = 'bookstore/books/ASYNC_ADD';
const ASYNC_REMOVE = 'bookstore/books/ASYNC_REMOVE';

const asyncAddBook = createAsyncThunk(
  ASYNC_ADD,
  async (book) => {
    const response = await addBookToAPI(book);
    return response;
  },
);

const asyncRemoveBook = createAsyncThunk(
  ASYNC_REMOVE,
  async (id) => {
    const response = await removeBookFromAPI(id);
    return response;
  },
);

const asyncGetState = createAsyncThunk(
  BOOKS_FETCHED,
  async () => {
    const response = await getBooksFromAPI();
    return response.books;
  },
);

export { asyncAddBook, asyncRemoveBook, asyncGetState };