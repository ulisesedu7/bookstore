const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdoFoPyXyirCKxOhxOS3/books';

const getBooksFromAPI = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  const idsArray = Object.keys(data).map((item) => ({
    item_id: item,
  }));

  const booksArray = Object.values(data);

  const booksObject = idsArray.map((item, id) => {
    const book = booksArray[id];
    const { title, author, category } = book[0];
    return ({
      ...item,
      title,
      author,
      category,
    });
  });

  const categories = new Set();

  booksObject.forEach((book) => {
    categories.add(book.category);
  });

  const initialState = {
    books: booksObject,
    categories,
  };
  return initialState;
};

const addBookToAPI = async (title, author, id) => {
  const response = await fetch(baseUrl, {
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

  const data = await response.json();
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

  const data = await response.json();
  return data;
};

export { getBooksFromAPI, addBookToAPI, removeBookFromAPI };
