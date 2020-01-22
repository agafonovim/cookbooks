import React from 'react';
import BookView from "../BookView/BookView";

/*
    Фильтр MostPopular
*/

const MostPopular = ({booksData, showBook}) => {

    let data = booksData.slice().sort((a, b) => a.rating < b.rating ? 1 : -1);

    const listItems = data.map((book) =>
        <BookView onClick={() => showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return listItems;
};

export default MostPopular;