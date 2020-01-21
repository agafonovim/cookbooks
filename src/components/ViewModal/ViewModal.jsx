import React from 'react';
import './ViewModal.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const ViewModal = ({book, ...props}) => {

    return (
            <div className="view-modal">
                <Header title={book.title} cancel={props.cancel}/>
                <div>
                    <Main book={book} />
                    <Footer {...props} />
                </div>
            </div>
    );
};

export default ViewModal;
