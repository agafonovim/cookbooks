import React from 'react';
import BookView from "../BookView/BookView";

const Search = ({booksData, searchValue}) => {
    searchValue = searchValue.toLowerCase();
    let data = booksData;
    let dataResult = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i]["title"].toLowerCase().indexOf(searchValue) > -1) {
            dataResult.push(data[i]);
        }
    }
    const listItems = dataResult.map((book) =>
        <BookView key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
    );

    return (listItems);
};

export default Search;