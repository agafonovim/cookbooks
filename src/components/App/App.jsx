import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Browse from "../Browse/Browse";
import NotFound from "../NotFound/NotFound";
import Modal from "../Modal/Modal";

import './App.scss';

/*
    Всё приложение
*/

const App = () => {
    // Функция парсинга из локала для хука
    const updateBooksData = () => JSON.parse(localStorage.getItem("cookbooks"));
    // Последняя добавленная книга
    const [lastAddedBook, setLastAddedBook] = useState(null);
    // Все книги
    const [booksData, setBooksData] = useState(updateBooksData);
    // Хук открытия любого модального окна
    const [showModal, setModal] = useState(0);
    // Активная просматриваемая книга
    const [activeBook, setActiveBook] = useState(null);
    // Статус, в котором открыто модальное окно
    const [modalStatus, setModalStatus] = useState(null);
    // Переменная для вставки в ДОМ
    let modal = (showModal ? <Modal modalStatus = {modalStatus}
                                    cancel={() => setModal(0)}
                                    book={activeBook}
                                    lastAddedBook={lastAddedBook}
                                    setLastAddedBook={setLastAddedBook}
                                    setModalStatus={setModalStatus}
                                    updateBooks={() => setBooksData(updateBooksData)} /> : null);

    return (
        <Router>
            <div className="app">
                <Sidebar
                    showAddModal = {() => {
                        setModal(!showModal);
                        setModalStatus("add");
                    }}
                />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/browse" />
                    </Route>
                    <Route path="/browse" render={() => <Browse booksData={booksData} showBook={(book) => {setActiveBook(book); setModal(!showModal); setModalStatus("view");}} />}/>
                    <Route path="*" render={() => <NotFound page />} />
                </Switch>
            </div>
            {modal}
        </Router>
    );
};

export default App;
