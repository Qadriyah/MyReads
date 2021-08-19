import React from "react";
import PropTypes from "prop-types";

const BookshelfSelect = ({ book, moveToShelf }) => {
  const options = [
    { key: "currentlyReading", value: "Currently Reading" },
    { key: "wantToRead", value: "Want to Read" },
    { key: "read", value: "Read" },
    { key: "none", value: "None" },
  ];

  return (
    <select
      value={book.shelf ? book.shelf : "none"}
      onChange={(event) => moveToShelf(event, book)}
    >
      <option value="move" disabled>
        Move to...
      </option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

BookshelfSelect.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
  }),
  moveToShelf: PropTypes.func.isRequired,
};

export default BookshelfSelect;
