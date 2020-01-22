import React from 'react';
import imageNotFound from '../../../assets/img/image-not-found.png';

import './BookView.scss';

/*
    Всё приложение
*/

const BookView = ({title, author, poster_image, onClick}) => (
    <button className="book" type="button" onClick={onClick}>
        {poster_image ?
            <img className="book_poster" width={200} src={poster_image} alt={title}/> :
            <img className="book_poster" width={200} src={imageNotFound} alt="Изображение не найдено"/>
        }
        <h2 className="book_title">{title}</h2>
        <span className="book_author">by {author}</span>
        <span className="book_rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
        </span>
    </button>
);

export default BookView;