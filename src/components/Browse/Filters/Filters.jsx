import React from 'react';
import './Filters.scss';
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar/SearchBar";

const Filters = props => {
    return (
        <div className="filters">
            <div>
                <Filter title="All Books" />
                <Filter title="Most Recent" />
                <Filter title="Most Popular" />
                <Filter title="Free Books" />
            </div>
            <SearchBar />
        </div>
    )
};

export default Filters;
