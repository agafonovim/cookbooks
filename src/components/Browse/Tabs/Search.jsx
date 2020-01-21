import React from 'react';
import BookView from "../BookView/BookView";
import NotFound from "../../NotFound/NotFound";

const Search = ({booksData, searchValue, ...props}) => {
    searchValue = searchValue.toLowerCase();
    let data = booksData;
    let dataResult = [];
    let listItems = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i]["title"].toLowerCase().indexOf(searchValue) > -1) {
            dataResult.push(data[i]);
        }
    }

    if (dataResult.length > 0) {
        listItems = dataResult.map((book) =>
            <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image}/>
        );
    } else {
        listItems = [<NotFound search />];
    }

    return listItems;
};

export default Search;