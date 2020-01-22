import React from 'react';

import './Header.scss';

/*
    Хэдер Browse
*/

const Header = ({title, children}) => (
    <header className="header header__page-header">
        <h1 className="header__title">{title}</h1>
        {children}
    </header>
);

export default Header;
