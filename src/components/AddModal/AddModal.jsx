import React from 'react';
import './AddModal.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import {Formik, Form} from "formik";
import * as Yup from 'yup';

const AddModal = ({updateBooks, ...props}) => {

    const addToLocalStorage = (name, value) => {
        let existing = JSON.parse(localStorage.getItem(name));
        existing = existing ? existing : [];
        existing.push({...value, id: (existing.length + 1)});
        localStorage.setItem(name, JSON.stringify(existing));
    };

    return (
            <div className="add-modal">
                <Header title="Add New Books" cancel={props.cancel}/>
                <Formik
                    initialValues={{
                        title: "",
                        author: "",
                        publisher: "",
                        paperback: "",
                        isbn: "",
                        genre: "",
                        poster_image: null,
                        information: "",
                        summary: "",
                        rating: Math.floor(1 + Math.random() * (5 + 1 - 1))
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string()
                            .min(2, 'Too Short!')
                            .max(50, 'Too Long!')
                            .required('Required'),
                        author: Yup.string()
                            .min(2, 'Too Short!')
                            .required('Required'),
                        publisher: Yup.string()
                            .required('Required'),
                        isbn: Yup.number()
                            .typeError('Must be a number')
                            .integer('Not integer number')
                            .required('Required'),
                    })}
                    onSubmit={(values) => {
                        addToLocalStorage("cookbooks", values);
                        updateBooks();
                        props.cancel();
                    }}
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
