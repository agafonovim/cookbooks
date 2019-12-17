import React from 'react';
import './Browse.scss';
import Header from "../Header/Header";
import NoMatchesFound from "../NoMatchesFound/NoMatchesFound";

const Browse = () => {
    return (
        <div className="browse-page">
            <Header title="Browse Available Books"/>
            <NoMatchesFound />
        </div>
    )
};

export default Browse;
