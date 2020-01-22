import React from 'react';
import { Field } from "formik";

import './Input.scss';

/*
    Поле ввода информации в модальнм окне
*/

const Input = ({title, required, children, ...props}) => (
    <div className="input">
        <label htmlFor={title.toLowerCase()}>{title}{required && <span className="red-text">*</span>}</label>
        <Field
            as="input"
            name={title.toLowerCase()}
            id={title.toLowerCase()}
            placeholder={`Enter ${title}`}
            {...props}
        />
        {children && <span className="input_error-message red-text">{children}</span>}
    </div>
);

export default Input;
