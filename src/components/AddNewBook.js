import React from 'react';

class AddNewBook extends React.PureComponent {
  render() {
    return (
      <div className="add-book-container">
        <h2>ADD NEW BOOK</h2>
        <form>
          <input type="text" placeholder="Book Title" />
          <input type="text" placeholder="Author" />
        </form>
      </div>
    );
  }
}

export default AddNewBook;
