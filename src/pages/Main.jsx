import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import BookList from "../componets/BookList";

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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                {currentlyReading && currentlyReading.length > 0 ? (
                  <BookList
                    books={currentlyReading}
                    moveToShelf={this.moveToShelf}
                  />
                ) : (
                  <div>Shelf is empty</div>
                )}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                {wantToRead && wantToRead.length > 0 ? (
                  <BookList books={wantToRead} moveToShelf={this.moveToShelf} />
                ) : (
                  <div>Shelf is empty</div>
                )}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                {read && read.length > 0 ? (
                  <BookList books={read} moveToShelf={this.moveToShelf} />
                ) : (
                  <div>Shelf is empty</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
