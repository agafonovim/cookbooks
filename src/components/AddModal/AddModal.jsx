import React from 'react';
import './AddModal.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { Formik, Form } from "formik";

const AddModal = props => {
    return (
            <div className="add-modal">
                <Header title="Add New Books" cancel={props.cancel}/>
                <Formik
                    initialValues={{
                        title: "",
                        author: "",
                        publisher: "",
                        paperback: "",
                        ISBN: "",
                        genre: "",
                        info: ""
                    }}
                    validate={values => {
                        let errors = {};
                        if (values.title === "") {
                            errors.title = true;
                        }
                        if (values.author === "") {
                            errors.author = true;
                        }
                        if (values.publisher === "") {
                            errors.publisher = true;
                        }
                        if (values.ISBN === "") {
                            errors.ISBN = true;
                        }
                        return errors;
                    }}
                    onSubmit={values => console.log(values)}
                >
                    <Form>
                        <Main {...props} />
                        <Footer {...props} />
                    </Form>
                </Formik>
            </div>
    );
};

export default AddModal;
