import React from 'react';

import './RedButton.scss';

/*
    Красная кнопка
*/

const RedButton = ({type, onClick, children}) => (
    <button className="red-btn" type={type} onClick={onClick}>{children}</button>
);

export default RedButton;
