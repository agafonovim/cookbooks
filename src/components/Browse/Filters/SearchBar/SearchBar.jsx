import React from 'react';
import { useTabState } from '@bumaga/tabs';
import './SearchBar.scss';

const SearchBar = ({setSearchValue}) => {
    const { onClick } = useTabState();

    return (
        <div className="search-bar">
            <input type="search" name="search_request" onChange={(e) => {setSearchValue(e); onClick();}} placeholder="Enter Keywords" />
            <i className="fa fa-search" aria-hidden="true"></i>
        </div>
    )
};

export default SearchBar;
