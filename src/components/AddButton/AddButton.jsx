import React from 'react';
import './AddButton.scss';

const AddButton = () => {
    return (
        <div className="add-button__layer">
            <button href="#" className="add-button"><i className="fa fa-plus" aria-hidden="true"></i>ADD A BOOK</button>
        </div>
    )
};

export default AddButton;