import React from 'react';
import './Modal.scss';
import ReactDOM from "react-dom";
import AddModal from "../AddModal/AddModal";

const Modal = ({modalStatus, ...props }) => {
    const createModal = () => (
        <div className="modal" role="dialog" aria-modal="true">
            {modalStatus === "add" && <AddModal {...props} />}
        </div>
    );
    return ReactDOM.createPortal(createModal(), document.getElementById('modal-root'));
};

export default Modal;
