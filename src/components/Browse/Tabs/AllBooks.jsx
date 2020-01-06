import React from 'react';
import BookView from "../BookView/BookView";

const AllBooks = ({booksData}) => {
    const listItems = booksData.map((book) =>
        <BookView key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return (listItems);
};

export default AllBooks;