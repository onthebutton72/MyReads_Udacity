import React from "react";
import Book from "./Book";

class Shelf extends React.Component {
  render() {
    return (
      <div>
        {this.props.bookshelves.map(newShelf => (
          <div key={newShelf.name} className="Shelf">
            <h2 className="Shelf-title">{newShelf.name}</h2>
            <div className="Shelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter(book => book.shelf === newShelf.shelf)
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf={book.shelf}
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Shelf;