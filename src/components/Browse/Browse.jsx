import React from 'react';
import './Browse.scss';
import Header from "./Header/Header";
import NoMatchesFound from "../NoMatchesFound/NoMatchesFound";
import Main from "./Main/Main";

const Browse = ({booksData}) => {
    return (
        <div className="browse-page">
            <Header title="Browse Available Books"/>
            {(booksData === null) ? <NoMatchesFound /> : <Main booksData={booksData} />}
        </div>
    )
};

export default Browse;
