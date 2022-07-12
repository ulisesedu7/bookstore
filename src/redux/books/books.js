// Create Const for the Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookstore/books/UPDATE_BOOK';

// Create functions to add, remove and update
const addBook = (book) => ({
  type: ADD_BOOK,
  title: book.title,
  author: book.author,
  id: book.id,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});

const updateBook = (book) => ({
  type: UPDATE_BOOK,
  title: book.title,
  author: book.author,
  id: book.id,
});

// Reducer for books
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];

    case UPDATE_BOOK:
      return state.map((id) => {
        if (id === action.id) {
          return [{
            title: action.title,
            author: action.author,
            id: action.id,
          }];
        }
        return state;
      });

    case REMOVE_BOOK:
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};

export { addBook, removeBook, updateBook };
export default booksReducer;
