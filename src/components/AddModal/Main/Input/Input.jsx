import React from 'react';
import './Input.scss';
import { Field } from "formik";

const Input = props => (
    <div className="input">
        <label htmlFor={props.title.toLowerCase()}>{props.title}{props.required && <span className="red-text">*</span>}</label>
        <Field
            as={"input"}
            type={props.type}
            name={props.title.toLowerCase()}
            id={props.title.toLowerCase()}
            placeholder={`Enter ${props.title}`}
        />
    </div>
);

export default Input;
