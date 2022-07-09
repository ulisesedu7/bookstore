import React from 'react';
import Book from './Book';

class ListOfBooks extends React.PureComponent {
  render() {
    const books = [
      {
        title: 'Book 1',
        author: 'Author 1',
      },
    ];

    return (
      <div className="book-list-container">
        <h2>Books</h2>
        <Book book={books} />
      </div>
    );
  }
}

export default ListOfBooks;
