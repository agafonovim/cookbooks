import React from 'react';
import Input from "../Main/Input/Input";
import { useFormikContext } from 'formik';

const Poster = props => {
    const formik = useFormikContext();

    const handlePosterImage = (e) => {
        let input = e.target;
        // if (!formik.values.email) {
        //     errors.email = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.email = 'Invalid email address';
        // }
        let reader = new FileReader();

        reader.readAsDataURL(input.files[0]);
        reader.onload = () => {
            formik.setFieldValue("poster_image", reader.result);
        }
    }

    return (
        <>
            <Input title="Poster" type="file" accept="image/jpeg,image/png,image/gif,image/svg+xml" onChange={(e) => handlePosterImage(e)}>
            </Input>
            {formik.values.poster_image && <img src={formik.values.poster_image} alt="preview_image" height={250} />}
        </>
    )
};

export default Poster;