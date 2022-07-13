import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const alertMessage = document.getElementById('alert-message');

    if (e.target.title.value && e.target.author.value) {
      const newBook = {
        title: e.target.title.value,
        author: e.target.author.value,
        id: v4(),
      };

      dispatch(addBook(newBook));

      e.target.title.value = '';
      e.target.author.value = '';
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
      <form id="main-form" onSubmit={handleAddSubmit}>
        <input name="title" type="text" placeholder="Book Title" />
        <input name="author" type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
        <span id="alert-message" />
      </form>
    </div>
  );
};

export default AddNewBook;
