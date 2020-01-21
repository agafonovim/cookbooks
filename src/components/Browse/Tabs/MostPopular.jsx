import React from 'react';
import BookView from "../BookView/BookView";

const MostPopular = ({booksData, ...props}) => {
    let data = booksData.slice().sort((a, b) => a.rating < b.rating ? 1 : -1);
    console.log(data);
    const listItems = data.map((book) =>
        <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return (listItems);
};

export default MostPopular;