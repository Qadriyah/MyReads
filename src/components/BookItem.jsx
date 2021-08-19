import React from "react";
import PropTypes from "prop-types";
import BookshelfSelect from "./BookshelfSelect";

const BookItem = ({
  backgroundImage,
  bookTitle,
  bookAuthors,
  moveToShelf,
  book,
}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />
        <div className="book-shelf-changer">
          <BookshelfSelect book={book} moveToShelf={moveToShelf} />
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  );
};

BookItem.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.string.isRequired,
  moveToShelf: PropTypes.func.isRequired,
  book: PropTypes.shape({
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default BookItem;
