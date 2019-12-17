import React from 'react';
import Input from "../Main/Input/Input";
import { useFormikContext } from 'formik';

const General = () => {
    const formik = useFormikContext();
    return (
        <>
            <Input title="Title" type="text" required>
                {formik.errors.title && formik.touched.title && formik.errors.title}
            </Input>
            <Input title="Author" type="text" required>
                {formik.errors.author && formik.touched.author && formik.errors.author}
            </Input>
            <Input title="Publisher" type="text" required>
                {formik.errors.publisher && formik.touched.publisher && formik.errors.publisher}
            </Input>
            <div className="group">
                <Input  title="Paperback" type="text" />
                <Input title="ISBN" type="text" required>
                    {formik.errors.isbn && formik.touched.isbn && formik.errors.isbn}
                </Input>
            </div>
            <Input title="Summary" type="text" />
        </>
    )
};

export default General;
