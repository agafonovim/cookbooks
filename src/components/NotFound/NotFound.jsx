import React from 'react';
import './NotFound.scss';

const NotFound = ({search, page}) => (
    <div className="page__not-found page__content-center">
        {page && <div className="image-not-found"></div>}
        {search && <div className="search-not-found"></div>}
    </div>
);

export default NotFound;