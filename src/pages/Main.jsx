import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI";
import BookShelf from "../components/BookShelf";

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
   * @description Prepares an array of book shelves
   * @returns
   */
  getBookShelves = () => {
    const { books } = this.state;
    return ["currentlyReading", "wantToRead", "read"].map((bookShelf) => {
      return {
        title: bookShelf,
        books:
          books && books.length > 0
            ? books.filter((book) => book.shelf === bookShelf)
            : [],
      };
    });
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
    const bookShelves = this.getBookShelves();

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelves.map((bookShelf) => {
              return (
                <BookShelf
                  key={bookShelf.title}
                  books={bookShelf.books}
                  title={bookShelf.title}
                  moveToShelf={this.moveToShelf}
                />
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
