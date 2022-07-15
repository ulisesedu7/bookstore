import React from 'react';
import AddNewBook from '../components/AddNewBook';
import ListOfBooks from '../components/ListOfBooks';

class BooksPage extends React.PureComponent {
  render() {
    return (
      <div className="main-container">
        <ListOfBooks />
        <AddNewBook />
      </div>
    );
  }
}

export default BooksPage;
