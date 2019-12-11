import React from 'react';
import './Footer.scss';
import RedButton from "../../Buttons/Red/RedButton";
import DefaultButton from "../../Buttons/Default/DefaultButton";

const Footer = props => {
    return (
    <div className="footer">
        <DefaultButton type="button" onClick={props.cancel}>CANCEL</DefaultButton>
        <RedButton type="submit">ADD BOOK</RedButton>
    </div>
    )
};

export default Footer;
