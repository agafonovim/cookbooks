import React from 'react';
import ReactDOM from "react-dom";
import AddModal from "../AddModal/AddModal";
import ViewModal from "../ViewModal/ViewModal";
import AddSuccessModal from "../AddSuccessModal/AddSuccessModal";

import './Modal.scss';

/*
    Модальное окно (затемнение и выход через портал в ДОМ)
*/

const Modal = ({modalStatus, lastAddedBook, ...props}) => {

    // Внутри модального окна рендерим то, какое должно быть по его статусу
    const createModal = () => (
        <div className="modal" role="dialog" aria-modal="true">
            {modalStatus === "add" && <AddModal {...props} />}
            {modalStatus === "view" && <ViewModal {...props} />}
            {modalStatus === "added_successfully" && <AddSuccessModal title={lastAddedBook} {...props} />}
        </div>
    );

    return ReactDOM.createPortal(createModal(), document.getElementById('modal-root'));
};

export default Modal;
