import React from 'react';

import './AddButton.scss';

/*
    Кнопка добавления книги в сайдбаре
*/

const AddButton = ({onClick}) => (
    <div className="add-button__layer">
        <button type="button" className="add-button" onClick={onClick}><i className="fa fa-plus" aria-hidden="true"></i>ADD A BOOK</button>
    </div>
);

export default AddButton;