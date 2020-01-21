import React from 'react';
import BookView from "../BookView/BookView";

const MostRecent = ({booksData, ...props}) => {
    let data = booksData.slice().reverse();
    const listItems = data.map((book) =>
        <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return (listItems);
};

export default MostRecent;