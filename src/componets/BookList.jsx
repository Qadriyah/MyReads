import React from "react";
import PropTypes from "prop-types";
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  moveToShelf: PropTypes.func.isRequired,
};

export default BookList;
