// selectBook is an ActionCreator, it needs to return an action aka an object with a type property
export function selectBook (book) {
    // console.log( 'book has been selected: ', book.title);
    // type is always uppercase, payload - piece of data that describes the action being undertaken
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
