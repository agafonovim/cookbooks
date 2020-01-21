import React from 'react';
import BookView from "../BookView/BookView";

const FreeBooks = ({booksData, ...props}) => {
    const listItems = booksData
            .filter(book => book.summary === "" || book.summary === "Free" || book.summary === "0")
            .map((book) =>
                <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return (listItems);
};

export default FreeBooks;