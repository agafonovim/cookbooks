import React from 'react';
import { Field } from "formik";

import './Textarea.scss';

/*
    Textarea в модальном окне добавления книги
*/

const Textarea = ({title, required, ...props}) => (
    <div className="textarea">
        <label htmlFor={title.toLowerCase()}>{title}{required && <span className="red-text">*</span>}</label>
        <Field
            as="textarea"
            id={title.toLowerCase()}
            name={title.toLowerCase()}
            placeholder={`Enter ${title}`}
            {...props}
        />
    </div>
);

export default Textarea;
