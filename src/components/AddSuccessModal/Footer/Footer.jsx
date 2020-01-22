import React from 'react';
import './Footer.scss';
import RedButton from "../../Buttons/Red/RedButton";

const Footer = props => {
    return (
        <div className="footer">
            <RedButton type="button" onClick={props.cancel}>CLOSE</RedButton>
        </div>
    )
};

export default Footer;
