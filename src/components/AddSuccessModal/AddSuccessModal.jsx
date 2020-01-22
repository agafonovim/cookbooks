import React from 'react';
import './AddSuccessModal.scss';
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const AddSuccessModal = ({title, ...props}) => {

    return (
            <div className="add_success-modal">
                    <Main title={title} />
                    <Footer {...props} />
            </div>
    );
};

export default AddSuccessModal;
