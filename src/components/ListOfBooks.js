import React from 'react';
import Book from './Book';

class ListOfBooks extends React.PureComponent {
  render() {
    const books = [
      {
        title: 'Book 1',
        author: 'Author 1',
        id: '1',
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        id: '2',
      },
    ];

    return (
      <div className="book-list-container">
        <h2>Books</h2>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    );
  }
}

export default ListOfBooks;
