import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const { books } = props;
  console.log(books, "??????");

  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookItem backgroundImage={book.imageLinks.thumbnail} />
          </li>
        );
      })}
    </ol>
  );
};

export default BookList;
