import React from 'react';
import BookView from "../BookView/BookView";

const AllBooks = ({booksData, ...props}) => {
    const listItems = booksData.map((book) =>
        <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return listItems;
};

export default AllBooks;