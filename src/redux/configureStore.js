import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import statusReducer from './categories/categories';
import booksReducer from './books/books';
import initialData from './initialData';

// Establish the root reducer
const rootReducer = combineReducers({
  books: booksReducer,
  categories: statusReducer,
});

// Set up the store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialData,
});

export default store;
