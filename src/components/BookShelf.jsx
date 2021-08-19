import React from "react";
import PropTypes from "prop-types";

import BookList from "./BookList";

const BookShelf = ({ books, moveToShelf, title }) => {
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
  books: PropTypes.arrayOf(
    PropTypes.shape({
      shelf: PropTypes.string,
      imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  moveToShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
