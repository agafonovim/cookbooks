import React from 'react';
import './Main.scss';

const Main = ({title}) => {
    return (
        <div className="main">
                <div className="modal-content">
                    {`The book ${title} successfully added`}
                </div>
        </div>
    )
};

export default Main;
