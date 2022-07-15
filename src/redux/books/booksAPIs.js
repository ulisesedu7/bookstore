import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookToAPI, removeBookFromAPI } from '../api/apiActions';
import { removeBook, addBook } from './books';

const ASYNC_ADD = 'bookstore/books/ASYNC_ADD';
const ASYNC_REMOVE = 'bookstore/books/ASYNC_REMOVE';

const asyncAddBook = createAsyncThunk(
  ASYNC_ADD,
  async (book, { dispatch }) => {
    const response = await addBookToAPI(book);
    dispatch(addBook(book));
    return response;
  },
);

const asyncRemoveBook = createAsyncThunk(
  ASYNC_REMOVE,
  (book, { dispatch }) => {
    const response = removeBookFromAPI(book.item_id);
    dispatch(removeBook(book));
    return response;
  },
);

export { asyncAddBook, asyncRemoveBook };
