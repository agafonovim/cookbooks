import React from 'react';

import './Main.scss';

/*
    Главная часть окна успешного добавления книги
*/

const Main = ({title}) => (
    <div className="main">
        <div className="modal-content">
            {`The book ${title} successfully added`}
        </div>
    </div>
);

export default Main;
