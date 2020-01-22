import React from 'react';

import './NoMatchesFound.scss';

/*
    Надпись "не найдено", если ни одна книга не была добавлена
*/

const NoMatchesFound = () => (
    <div className="page__no-matches-found">
        <div>
            <span className="text-muted">Nothing is here :(</span>
        </div>
    </div>
);

export default NoMatchesFound;