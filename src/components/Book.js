import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { asyncRemoveBook } from '../redux/books/booksAPIs';
import ProgressCircle from './Progress-C';
import UpdateProgress from './UpdateProgress';

const Book = (props) => {
  const {
    title, author, book,
  } = props;
  const { category } = book;

  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(asyncRemoveBook(book));
  };

  return (
    <section className="book-card">
      <div className="book-container">
        <p id="book-category">{category}</p>
        <h3 id="book-title">{title}</h3>
        <p id="book-author">{author}</p>

        <div className="btns-container">
          <button type="button">Comments</button>
          <div className="btn-division" />
          <button
            type="button"
            onClick={() => {
              handleRemove(book);
            }}
          >
            Remove
          </button>
          <div className="btn-division" />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress-container">
        <ProgressCircle />
        <div className="progress-division" />
        <UpdateProgress />
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
