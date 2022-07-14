import { fetchBook } from "../books/books"

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdoFoPyXyirCKxOhxOS3'

const getBooksFromAPI = () => async (dispatch) => {
  const books = [];
  const data = await fetch(baseUrl);
  const response = await data.json();

  Object.keys(response).map((key) => {
    const book = response[key][0];
    book.id = key;
    book.key = key;
    books.push(book);
    return null;
  });
  dispatch(fetchBook(books));
};

const addBookToAPI = (title, author, id) => {
  fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'Fiction',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

const removeBookFromAPI = (id) => {
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export { getBooksFromAPI, addBookToAPI, removeBookFromAPI };