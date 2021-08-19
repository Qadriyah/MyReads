import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Search from "./pages/Search";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
        </Router>
      </div>
    );
  }
}

export default BooksApp;
