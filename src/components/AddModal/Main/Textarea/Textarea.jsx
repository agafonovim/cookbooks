import React from 'react';
import './Textarea.scss';
import { Field } from "formik";

const Textarea = props => (
    <div className="textarea">
        <label htmlFor={props.title.toLowerCase()}>{props.title}{props.required && <span className="red-text">*</span>}</label>
        <Field
            as={"textarea"}
            name={props.title.toLowerCase()}
            placeholder={`Enter ${props.title}`}
        />
    </div>
);

export default Textarea;
