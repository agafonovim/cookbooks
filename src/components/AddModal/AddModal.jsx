import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import {Formik, Form} from "formik";
import * as Yup from 'yup';

import './AddModal.scss';

/*
    Модальное окно добавления книги
*/

const AddModal = ({updateBooks, setModalStatus, setLastAddedBook, ...props}) => {

    // Функция добавления в локалсторадж заданных значений (value) под именем (name)
    const addToLocalStorage = (name, value) => {
        let existing = JSON.parse(localStorage.getItem(name)); // Парсим JSON локалсторадж и переводим в массив
        existing = existing ? existing : []; // Проверяем есть что внутри или нет, если да - создаем пустой массив
        existing.push({...value, id: (existing.length + 1)}); // Добавляем объект книги в конец массива
        localStorage.setItem(name, JSON.stringify(existing)); // Переводим всё в JSON и грузим в локалсторадж
    };

    return (
            <div className="add-modal">
                <Header title="Add New Books" {...props} />
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
                        setLastAddedBook(values.title);
                        updateBooks();
                        setModalStatus("added_successfully");
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
