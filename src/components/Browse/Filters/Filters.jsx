import React from 'react';
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar/SearchBar";

import './Filters.scss';

/*
    Строчка с фильтрами в Browse
*/

const Filters = ({...props}) => (
    <div className="filters">
        <div>
            <Filter title="All Books" />
            <Filter title="Most Recent" />
            <Filter title="Most Popular" />
            <Filter title="Free Books" />
        </div>
        <SearchBar {...props} />
    </div>
);

export default Filters;
