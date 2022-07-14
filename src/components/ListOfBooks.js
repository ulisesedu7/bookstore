import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list-container">
      <h2>Books</h2>
      {books.map((book) => (
        <Book title={book.title} author={book.author} key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default ListOfBooks;
