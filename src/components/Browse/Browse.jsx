import React from 'react';
import './Browse.scss';
import Header from "./Header/Header";
import NoMatchesFound from "../NoMatchesFound/NoMatchesFound";
import Main from "./Main/Main";

const Browse = ({booksData}) => {
    console.log(booksData);
    return (
        <div className="browse-page">
            <Header title="Browse Available Books"/>
            {(booksData === null) ? <NoMatchesFound /> : <Main />}
        </div>
    )
};

export default Browse;
