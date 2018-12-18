import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

	render() {
		return(
			<div>
				{this.props.bookshelves.map((Shelf) => (
						<div key={Shelf.name} className="Shelf">
							<h2 className="Shelf-title">{Shelf.name}</h2>
							<div className="Shelf-books">
								<ol className="books-grid">
									{this.props.books
										.filter(book => book.shelf === Shelf.shelf)
										.map(book => (
											<li key={book.id}>
												<Book 
													book={book}
													changeShelf={this.props.changeShelf}
													currentShelf={book.shelf}
												/>
											</li>
											)
										)}
								</ol>
							</div>
						</div>
					)
				)}
			</div>
		)
	}
}

export default Shelf