import React from "react";
import PropTypes from "prop-types";

import BookList from "./BookList";

const BookShelf = (props) => {
  const { books, moveToShelf, title } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {books && books.length > 0 ? (
          <BookList books={books} moveToShelf={moveToShelf} />
        ) : (
          <div>Shelf is empty</div>
        )}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  moveToShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
