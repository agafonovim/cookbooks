import React from 'react';
import BookView from "../BookView/BookView";

/*
    Фильтр AllBooks
*/

const AllBooks = ({booksData, showBook}) => {
    const listItems = booksData.map((book) =>
        <BookView onClick={() => showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return listItems;
};

export default AllBooks;