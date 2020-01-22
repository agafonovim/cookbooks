import React from 'react';

import './Text.scss';

/*
    Текстовое поле или вывод ошибки в модальном окне просмотра книги
*/

const Text = ({title, text}) => (
    <div className="text">
        <span>{title}</span>
        {text ? <p>{text}</p> : <p>Not found</p>}
    </div>
);

export default Text;
