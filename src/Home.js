import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const bookshelfs = [
      {
        name: "Currently Reading",
        shelf: "currentlyReading"
      },
      {
        name: "Want to Read",
        shelf: "wantToRead"
      },
      {
        name: "Read",
        shelf: "read"
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            bookshelves={bookshelfs}
            books={this.props.books}
            moveShelf={this.props.moveShelf}
          />
          <Link className="open-search" to="./Search">
            <button
              onClick={() => {
                this.setState({ showSearchPage: true });
              }}
            >
              Add a book
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;