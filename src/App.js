import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {

  state = {books: []}

  loadPage = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }
  
  componentDidMount() {
    this.loadPage();
  }

  changeShelf = (book, val) => {
    book.shelf = val;
    BooksAPI.update(book, book.shelf).then((data) => {
      let result = this.state.books.filter((filtered) => filtered.id !== book.id)
      this.setState({ books: result.concat([book]) })
    });
  }

  render() {
    return (
      <div className="app">
      <Route path="/" exact render={() => (
        <Home 
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      )}/>
        <Route path="/search" render={() => (
        <Search 
          changeShelf={this.changeShelf}
          books={this.state.books}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp