import React from 'react';
import BookView from "../BookView/BookView";

/*
    Фильтр MostRecent
*/

const MostRecent = ({booksData, showBook}) => {

    let data = booksData.slice().reverse();

    const listItems = data.map((book) =>
        <BookView onClick={() => showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return listItems;
};

export default MostRecent;