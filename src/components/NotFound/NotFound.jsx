import React from 'react';

import './NotFound.scss';

/*
    Страница 404 и "не найдено" в поиске
*/

const NotFound = ({search, page}) => (
    <div className="page__not-found page__content-center">
        {search && <div className="search-not-found"></div>}
        {page && <div className="image-not-found"></div>}
    </div>
);

export default NotFound;