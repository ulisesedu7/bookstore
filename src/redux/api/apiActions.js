import { fetchBooks } from '../books/books';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdoFoPyXyirCKxOhxOS3/books';

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
  dispatch(fetchBooks(books));
};

const addBookToAPI = async (book) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.text();
  return data;
};

const removeBookFromAPI = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.text();
  return data;
};

export { getBooksFromAPI, addBookToAPI, removeBookFromAPI };
