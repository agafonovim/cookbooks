import React from 'react';
import RedButton from "../../Buttons/Red/RedButton";
import DefaultButton from "../../Buttons/Default/DefaultButton";

import './Footer.scss';

/*
    Футер модального окна добавления книги
*/

const Footer = ({cancel}) => (
    <div className="footer">
        <DefaultButton type="button" onClick={cancel}>CANCEL</DefaultButton>
        <RedButton type="submit">ADD BOOK</RedButton>
    </div>
);

export default Footer;
