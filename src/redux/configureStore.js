import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import statusReducer from './categories/categories';
import booksReducer from './books/books';
import { getBooksFromAPI } from './api/apiActions';

// New Initial Data
const preloadedState = {
  books: [],
  categories: [],
};

// Establish the root reducer
const rootReducer = combineReducers({
  books: booksReducer,
  categories: statusReducer,
});

// Set up the store
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.dispatch(getBooksFromAPI());

export default store;
