import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import './App.scss';
import Sidebar from "../Sidebar/Sidebar";
import Browse from "../Browse/Browse";
import NotFound from "../NotFound/NotFound";
import Modal from "../Modal/Modal";

const App = () => {
    const updateBooksData = () => JSON.parse(localStorage.getItem("cookbooks"));
    const [booksData, setBooksData] = useState(updateBooksData);
    const [showModal, setModal] = useState(0);
    const [modalStatus, setModalStatus] = useState(null);
    let modal = (showModal ? <Modal modalStatus={modalStatus}
                                    cancel={() => setModal(0)}
                                    updateBooks={() => setBooksData(updateBooksData)}/> : null);

    return (
        <Router>

            <div className="app">
                <Sidebar
                    onClick={() => {
                        setModal(!showModal);
                        setModalStatus("add");
                    }}
                />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/browse" />
                    </Route>
                    <Route path="/browse" render={() => <Browse booksData={booksData} />} />
                    <Route path="*" render={() => <NotFound page />} />
                </Switch>
            </div>
            {modal}
        </Router>
    )
};

export default App;
