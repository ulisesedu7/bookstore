import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { nanoid } from '@reduxjs/toolkit';
import { asyncAddBook } from '../redux/books/booksAPIs';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  const changeTitle = (e) => {
    setState({ ...state, title: e.target.value, item_id: nanoid() });
  };

  const changeAuthor = (e) => {
    setState({ ...state, author: e.target.value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const alertMessage = document.getElementById('alert-message');

    if (state.title && state.author) {
      const newBook = {
        item_id: nanoid(),
        title: state.title,
        author: state.author,
      };

      dispatch(asyncAddBook(newBook));

      setState({ title: null, author: null });
    } else {
      alertMessage.textContent = 'Please, enter a book with their title and author';
      setTimeout(() => {
        alertMessage.textContent = '';
      }, 4500);
    }
  };

  return (
    <div className="add-book-container">
      <h2>ADD NEW BOOK</h2>
      <form id="main-form">
        <input name="title" type="text" placeholder="Book Title" onChange={changeTitle} value={state.title || ''} />
        <input name="author" type="text" placeholder="Author" onChange={changeAuthor} value={state.author || ''} />
        <button type="submit" onClick={handleAddSubmit}>ADD BOOK</button>
        <span id="alert-message" />
      </form>
    </div>
  );
};

export default AddNewBook;
