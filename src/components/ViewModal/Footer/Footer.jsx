import React from 'react';
import DefaultButton from "../../Buttons/Default/DefaultButton";

import './Footer.scss';

/*
    Футер модального окна просмотра книги
*/

const Footer = ({cancel}) => {
    return (
        <div className="footer">
            <DefaultButton type="button" onClick={cancel}>CANCEL</DefaultButton>
        </div>
    )
};

export default Footer;
