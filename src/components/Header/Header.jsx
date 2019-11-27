import React from 'react';
import './Header.scss';

const Header = ({title}) => (
    <header className="header header__page-header">
        <h1 className="header__title">{title}</h1>
    </header>
);

export default Header;
