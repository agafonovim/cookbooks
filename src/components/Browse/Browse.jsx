import React from 'react';
import Header from "./Header/Header";
import NoMatchesFound from "../NoMatchesFound/NoMatchesFound";
import Main from "./Main/Main";

import './Browse.scss';

/*
    Страница Browse
*/

const Browse = ({booksData, ...props}) => (
    <div className="browse-page">
        <Header title="Browse Available Books"/>
        {(booksData === null) ? <NoMatchesFound /> : <Main booksData={booksData} {...props} />}
    </div>
);

export default Browse;
