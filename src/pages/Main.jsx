import React, { Component } from "react";
import { getAll } from "../BooksAPI";
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

  getCategory = (bookShelf) => {
    const { books } = this.state;
    return books && books.length > 0
      ? books.filter((book) => book.shelf === bookShelf)
      : [];
  };

  render() {
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
                <BookList books={this.getCategory("currentlyReading")} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList books={this.getCategory("wantToRead")} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList books={this.getCategory("read")} />
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
