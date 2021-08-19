import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import BookShelf from "../componets/BookShelf";

class Main extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState(() => ({ books: data }));
    });
  }

  /**
   * @description Extracts a particular category from the entire list of books
   * @param {*} books
   * @param {*} bookShelf
   * @returns
   */
  getCategory = (bookShelf) => {
    const { books } = this.state;
    return books && books.length > 0
      ? books.filter((book) => book.shelf === bookShelf)
      : [];
  };

  /**
   * @description Moves a book between shelves
   * @param {*} event
   * @param {*} book
   */
  moveToShelf = (event, book) => {
    const shelf = event.target.value;
    update(book, shelf).then(() => {
      this.setState((prevState) => {
        const updatedBooks = prevState.books.map((item) => {
          if (item.id === book.id) {
            item.shelf = shelf;
            return item;
          }
          return item;
        });
        return { books: updatedBooks };
      });
    });
  };

  render() {
    const { history } = this.props;
    const currentlyReading = this.getCategory("currentlyReading");
    const wantToRead = this.getCategory("wantToRead");
    const read = this.getCategory("read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={currentlyReading}
              title="Currently Reading"
              moveToShelf={this.moveToShelf}
            />
            <BookShelf
              books={wantToRead}
              title="Want to Read"
              moveToShelf={this.moveToShelf}
            />
            <BookShelf
              books={read}
              title="Read"
              moveToShelf={this.moveToShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => history.push("/search")}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default Main;
