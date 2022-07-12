import { configureStore, combineReducers } from '@reduxjs/toolkit';
import statusReducer from './categories/categories';
import booksReducer from './books/books';

// Establish the root reducer
const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

// Set up the store
const store = configureStore(rootReducer);

export default store;
