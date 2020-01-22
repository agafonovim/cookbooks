import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

import './ViewModal.scss';

/*
    Модальное окно просмотра книги
*/

const ViewModal = ({book, ...props}) => (
    <div className="view-modal">
        <Header title={book.title} {...props} />
        <div>
            <Main book={book} />
            <Footer {...props} />
        </div>
    </div>
);

export default ViewModal;
