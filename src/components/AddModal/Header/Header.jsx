import React from 'react';
import './Header.scss';

const Header = props => (
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        <button className="header__cancel" onClick={props.cancel}><i className="fa fa-times" aria-hidden="true"></i></button>
    </div>
);

export default Header;
