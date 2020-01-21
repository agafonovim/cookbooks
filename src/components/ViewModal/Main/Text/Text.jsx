import React from 'react';
import './Text.scss';

const Text = ({title, text}) => (
    <div className="text">
        <span>{title}</span>
        {text ? <p>{text}</p> : <p>Not found</p>}
    </div>
);

export default Text;
