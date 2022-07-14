import { React, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { getBooksFromAPI } from '../redux/api/apiActions';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, []);

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
