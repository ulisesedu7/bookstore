const Book = (book) => {
  const { title, author } = book;

  return (
    <div className="book-container">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
