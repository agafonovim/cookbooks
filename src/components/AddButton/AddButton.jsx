import React from 'react';
import './AddButton.scss';

const AddButton = props => {
    return (
        <div className="add-button__layer">
            <button href="#" className="add-button" onClick={props.onClick}><i className="fa fa-plus" aria-hidden="true"></i>ADD A BOOK</button>
        </div>
    )
};

export default AddButton;