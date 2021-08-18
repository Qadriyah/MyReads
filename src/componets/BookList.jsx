import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const { books, moveToShelf } = props;

  return (
    <ol className="books-grid">
      {books && books.length > 0
        ? books.map((book) => {
            return (
              <li key={book.id}>
                <BookItem
                  backgroundImage={
                    book && book.imageLinks ? book.imageLinks.thumbnail : ""
                  }
                  bookTitle={book ? book.title : ""}
                  bookAuthors={
                    book && book.authors ? book.authors.join(", ") : ""
                  }
                  moveToShelf={moveToShelf}
                  book={book}
                />
              </li>
            );
          })
        : null}
    </ol>
  );
};

export default BookList;
