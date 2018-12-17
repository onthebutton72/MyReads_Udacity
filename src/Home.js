import React from 'react'
import Shelf from './Shelf'

class Home extends React.Component {
	render() {
		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>
						MyReads
					</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf />
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>
						Add a book
					</button>
				</div>
			</div>
		)
	}
}

export default Home