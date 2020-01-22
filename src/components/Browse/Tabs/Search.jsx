import React from 'react';
import BookView from "../BookView/BookView";
import NotFound from "../../NotFound/NotFound";

/*
    Фильтр Search
*/

const Search = ({booksData, searchValue, showBook}) => {

    // Приводим к нижнему регистру поисковое значение
    searchValue = searchValue.toLowerCase();

    let dataResult = [];
    let listItems = [];

    // Проходим по массиву с книгами, всё в нижнем регистре, ищем поисковое значение
    for (let i = 0; i < booksData.length; i++) {
        if (booksData[i]["title"].toLowerCase().indexOf(searchValue) > -1) {
            dataResult.push(booksData[i]);
        }
    }

    // Если нет ни одной книги по итогу - выводим компонент "не найдено"
    if (dataResult.length > 0) {
        listItems = dataResult.map((book) =>
            <BookView onClick={() => showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image}/>
        );
    } else {
        listItems = [<NotFound search />];
    }

    return listItems;
};

export default Search;