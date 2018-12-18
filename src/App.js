import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {

  state = {books: []}
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  moveShelf = (book, value) => {
    book.shelf = value;
    BooksAPI.update(book, book.shelf).then((data) => {
      let result = this.state.books.filter((newBook) => newBook.id !== book.id)
      this.setState({ books: result.concat([book]) })
    });
  }

  render() {
    return (
      <div className="app">
      <Route path="/" exact render={() => (
        <Home 
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      )}/>
        <Route path="/search" render={() => (
        <Search 
          moveShelf={this.moveShelf}
          books={this.state.books}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp