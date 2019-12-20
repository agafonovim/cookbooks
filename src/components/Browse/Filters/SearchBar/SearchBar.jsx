import React from 'react';
import { useTabState } from '@bumaga/tabs';
import './SearchBar.scss';

const SearchBar = props => {
    const { onClick } = useTabState();

    return (
        <div className="search-bar">
            <input type="search" placeholder="Enter Keywords" />
            <button type="submit" onClick={onClick}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
    )
};

export default SearchBar;
