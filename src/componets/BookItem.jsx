import React, { Component } from "react";
import PropTypes from "prop-types";

class BookItem extends Component {
  state = {
    categories: ["Currently Reading", "Want to Read", "Read", "None"],
  };

  render() {
    const { backgroundImage, bookTitle, bookAuthors } = this.props;

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
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    );
  }
}

BookItem.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.string.isRequired,
  // categories: PropTypes.array.isRequired,
};

export default BookItem;
