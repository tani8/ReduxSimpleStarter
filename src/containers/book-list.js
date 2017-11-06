import React, {Component} from 'react';
import { connect } from 'react-redux';
// action creator
import { selectBook } from '../actions/index';
// make sure data from selectBook flows to all reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList () {
        return this.props.books.map( book => {
            return (
                <li
                    key={book.title}
                    onClick={ () => this.props.selectBook(book) }
                    className='list-group-item'>
                    {book.title}
                </li>
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
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books,
    };
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps( dispatch ){
    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators( {selectBook: selectBook}, dispatch );
}

// promote BookList from component to container - needs to know about new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);