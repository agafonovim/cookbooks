import React from 'react';

import './Header.scss';

/*
    Футер модального окна добавления книги
*/

const Header = ({title, cancel}) => (
    <div className="header">
        <h1 className="header__title">{title}</h1>
        <button className="header__cancel" onClick={cancel}><i className="fa fa-times" aria-hidden="true"></i></button>
    </div>
);

export default Header;
