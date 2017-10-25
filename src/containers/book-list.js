import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map( book => {
            return (
                <li key={book.title} className='list-group-item'>{book.title}</li>
            );
        });
    }

    render () {
        return (
            <ul className='list-group col-sm-3'>
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    // whatever is returned will show up as props in booklist
    return {
        books: state.books,
    };
}

export default connect(mapStateToProps)(BookList);