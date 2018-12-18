import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		console.log(query)
		this.setState({
			query: query
		})
		this.updateBooks(query);
	}

	updateBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then((books) => {
				if (books.error) {
					this.setState({ books: [] });
				} else {
					books.forEach(book => {
					   let b = this.props.books.find(Book => Book.id === book.id);
					   book.shelf = b && b.shelf || 'none';
					});
					this.setState({ books: books });
				}
			})
		} else {
			this.setState({ books: [] })
		}
	}

	render() {
		return(
			<div className="search-books">
	            <div className="search-books-bar">
		            	<Link
		            	to="/"
		            	className="close-search"></Link>

		              	<div className="search-books-input-wrapper">
			                <input 
			                type="text"
			                placeholder="Search by title or author"
			                value={this.state.query}
			                onChange={(event) => this.updateQuery(event.target.value)}
			                />
		              	</div>
	            </div>

	            <div className="search-books-results">
	              	<ol className="books-grid">
	              	{this.state.books.map((book) => {
	              		return (
	              			<li key={book.id}>
	              				<Book
	              					book={book}
	              					changeShelf={this.props.changeShelf}
	              					currentShelf={book.shelf}
	              				/>
	              			</li>
	              		)
	              	})}
	              	</ol>
	            </div>
          </div>
		)
	}
}

export default Search