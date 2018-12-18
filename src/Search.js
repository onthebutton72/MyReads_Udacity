import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class Search extends React.Component {
  constructor(props) {
  	super(props);
	  this.state = {
	    books: [],
	    query: ""
	};
  }

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.changeBooks(query);
  };

  changeBooks = query => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ books: [] });
        } else {
          books.forEach(book => {
            let foundShelf = this.props.books.find(Book => Book.id === book.id);
            if(foundShelf){
            	book.shelf = (foundShelf && foundShelf.shelf);
            	}else {
            		book.shelf = "none";
            	}
            });
          this.setState({ books: books });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button
              className="close-search"
              onClick={() => this.setState({ showSearchPage: false })}
            >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    moveShelf={this.props.moveShelf}
                    currentShelf={book.shelf}
                  />
                </li>
              );
            })}
	            {this.state.books.length === 0 && 
	            	<h2 style={{textAlign: 'center'}}>
			            No results found
		            </h2>}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;