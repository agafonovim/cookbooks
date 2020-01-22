import React from 'react';
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

import './AddSuccessModal.scss';

/*
    Модальное окно добавления книги
*/

const AddSuccessModal = ({title, ...props}) => (
    <div className="add_success-modal">
        <Main title={title} />
        <Footer {...props} />
    </div>
);

export default AddSuccessModal;
