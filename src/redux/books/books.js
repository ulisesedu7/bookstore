// Create Const for the Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookstore/books/UPDATE_BOOK';
const BOOKS_FETCHED = 'boookstore/books/BOOKS_FETCHED';

// Create functions to add, remove and update
const addBook = (book) => ({
  type: ADD_BOOK,
  title: book.title,
  author: book.author,
  item_id: book.item_id,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  title: book.title,
  author: book.author,
  item_id: book.item_id,
});

const updateBook = (book) => ({
  type: UPDATE_BOOK,
  title: book.title,
  author: book.author,
  item_id: book.item_id,
});

const fetchBooks = (getBooks) => ({
  type: BOOKS_FETCHED,
  books: getBooks,
});

// Reducer for books
const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          item_id: action.item_id,
        },
      ];

    case UPDATE_BOOK:
      return state.map((id) => {
        if (id === action.item_id) {
          return [{
            title: action.title,
            author: action.author,
            item_id: action.item_id,
          }];
        }
        return state;
      });

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id);

    case BOOKS_FETCHED:
      return action.books;

    default:
      return state;
  }
};

export {
  addBook, removeBook, updateBook, fetchBooks,
};
export default booksReducer;
