import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookToAPI, removeBookFromAPI } from '../api/apiActions';

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

export { asyncAddBook, asyncRemoveBook };
