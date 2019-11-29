import React from 'react';
import './AddModal.scss';
import Header from "./Header/Header";

const AddModal = (props) => {
    return (
            <div className="add-modal">
                <Header title="Add New Books" cancel={props.cancel}/>
            </div>
    );
};

export default AddModal;
