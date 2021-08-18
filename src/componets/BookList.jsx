import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const { books } = props;

  return (
    <ol className="books-grid">
      {books && books.length > 0
        ? books.map((book) => {
            return (
              <li key={book.id}>
                <BookItem
                  backgroundImage={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthors={book.authors.join(", ")}
                />
              </li>
            );
          })
        : null}
    </ol>
  );
};

export default BookList;
