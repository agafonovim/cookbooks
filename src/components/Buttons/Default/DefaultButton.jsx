import React from 'react';
import './DefaultButton.scss';

const DefaultButton = ({type, onClick, children}) => (
    <button className="default-btn" type={type} onClick={onClick}>{children}</button>
);

export default DefaultButton;
