import React from 'react';
import BookView from "../BookView/BookView";
import NotFound from "../../NotFound/NotFound";

/*
    Фильтр FreeBooks
*/

const FreeBooks = ({booksData, ...props}) => {

    // Отбираем какие бесплатные
    const dataResult = booksData.filter(book => book.summary === "" || book.summary === "Free" || book.summary === "0");

    // Если нет ни одной книги по итогу - выводим компонент "не найдено"
    let listItems = [];
    if (dataResult.length > 0) {
        listItems = booksData.map((book) =>
            <BookView onClick={() => props.showBook(book)} key={book.id} title={book.title} author={book.author} poster_image={book.poster_image} />
        );
    } else {
        listItems = [<NotFound search />];
    }

    return listItems;
};

export default FreeBooks;