import React from "react";
import PropTypes from "prop-types";

const BookItem = (props) => {
  const { backgroundImage, bookTitle, bookAuthors, moveToShelf, book } = props;

  const renderOptions = () => {
    return [
      { key: "currentlyReading", value: "Currently Reading" },
      { key: "wantToRead", value: "Want to Read" },
      { key: "read", value: "Read" },
      { key: "none", value: "None" },
    ].map((option) => {
      return (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      );
    });
  };

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
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={(event) => moveToShelf(event, book)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            {renderOptions()}
          </select>
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
  book: PropTypes.shape({}),
};

export default BookItem;
