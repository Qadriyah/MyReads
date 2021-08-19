import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update, getAll } from "../BooksAPI";
import BookList from "../components/BookList";

class Search extends Component {
  state = {
    books: [],
    shelves: [],
    query: "",
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState(() => ({ shelves: data }));
    });
  }

  /**
   * @description Handles input text change event
   * @param {*} event
   */
  onChange = (event) => {
    let { value } = event.target;
    this.setState({ query: value.trim() }, () => {
      search(this.state.query).then((data) => {
        const { shelves } = this.state;
        const updatedData =
          data && Array.isArray(data)
            ? data.map((book) => {
                const inShelf = shelves.find((item) => item.id === book.id);
                if (inShelf) {
                  book.shelf = inShelf.shelf;
                }
                return book;
              })
            : [];
        this.setState(() => ({ books: updatedData }));
      });
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
    const { books, query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.onChange(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {query && <BookList books={books} moveToShelf={this.moveToShelf} />}
        </div>
      </div>
    );
  }
}

export default Search;
