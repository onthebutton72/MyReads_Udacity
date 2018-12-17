import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
	render() {
		const shelfName = ['Currently Reading', 'Want to Read', 'Read']
		return(
			<div>
				<div className="bookshelf">
		            <h2 className="bookshelf-title">{shelfName[0]}</h2>
		            <div className="bookshelf-books">
	                    <ol className="books-grid">
			                <Book />
	                    </ol>
	                </div>
	            </div>
	            <div className="bookshelf">
		            <h2 className="bookshelf-title">{shelfName[1]}</h2>
		            <div className="bookshelf-books">
	                    <ol className="books-grid">
			                <Book />
	                    </ol>
	                </div>
	            </div>
	            <div className="bookshelf">
		            <h2 className="bookshelf-title">{shelfName[2]}</h2>
			        <div className="bookshelf-books">
	                    <ol className="books-grid">
			                <Book />
	                    </ol>
	                </div>
	            </div>
            </div>
		)
	}
}

export default Shelf