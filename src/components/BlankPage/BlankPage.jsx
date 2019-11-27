import React from 'react';
import './BlankPage.scss';

const BlankPage = props => (
    <div className="page page__content-center">
        {props.children}
    </div>
);

export default BlankPage;