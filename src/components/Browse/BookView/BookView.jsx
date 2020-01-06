import React from 'react';
import './BookView.scss';

const BookView = ({title, author, poster_image}) => {
    return (
        <button className="book" type="button">
            <img className="book_poster" width={200} src={poster_image} alt={title}/>
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
    )
};

export default BookView;