import React from 'react';
import './Textarea.scss';

import { Field } from "formik";

const Textarea = ({title, required, ...props}) => (
    <div className="textarea">
        <label htmlFor={title.toLowerCase()}>{title}{required && <span className="red-text">*</span>}</label>
        <Field
            as="textarea"
            id={title.toLowerCase()}
            name={title.toLowerCase()}
            placeholder={`Enter ${title}`}
        />
    </div>
);

export default Textarea;
