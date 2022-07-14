import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { asyncRemoveBook } from '../redux/books/booksAPIs';

const Book = (props) => {
  const {
    title, author, book,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(asyncRemoveBook(book));
  };

  return (
    <div className="book-container">
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        onClick={() => {
          handleRemove(book);
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
