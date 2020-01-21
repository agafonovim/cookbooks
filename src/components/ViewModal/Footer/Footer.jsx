import React from 'react';
import './Footer.scss';
import DefaultButton from "../../Buttons/Default/DefaultButton";

const Footer = props => {
    return (
        <div className="footer">
            <DefaultButton type="button" onClick={props.cancel}>CANCEL</DefaultButton>
        </div>
    )
};

export default Footer;
