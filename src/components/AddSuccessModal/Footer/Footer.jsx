import React from 'react';
import RedButton from "../../Buttons/Red/RedButton";

import './Footer.scss';

/*
    Модальное окно успешного добавления книги
*/

const Footer = ({cancel}) => (
    <div className="footer">
        <RedButton type="button" onClick={cancel}>CLOSE</RedButton>
    </div>
);

export default Footer;
