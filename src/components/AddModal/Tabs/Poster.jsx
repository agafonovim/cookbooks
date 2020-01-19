import React from 'react';
import Input from "../Main/Input/Input";
import { useFormikContext } from 'formik';

const Poster = props => {
    const formik = useFormikContext();

    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png",
        "image/svg+xml"
    ];

    const checkFormat = value => value && SUPPORTED_FORMATS.includes(value.type);

    const handlePosterImage = (e) => {
        let input = e.target.files[0];

        if (checkFormat(input)) {
            let reader = new FileReader();

            reader.readAsDataURL(input);
            reader.onload = () => {
                formik.setFieldValue("poster_image", reader.result);
            }
        } else {
            formik.setErrors({poster: "Unsupported format"});
        }
    }

    return (
        <>
            <Input title="Poster" type="file" accept="image/jpeg,image/png,image/gif,image/svg+xml" onChange={(e) => handlePosterImage(e)}>
                {formik.errors.poster && formik.touched.poster && formik.errors.poster}
            </Input>
            {formik.values.poster_image && <img src={formik.values.poster_image} alt="preview_image" height={250} />}
        </>
    )
};

export default Poster;