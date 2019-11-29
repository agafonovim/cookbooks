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
    const [showModal, setModal] = useState(0);
    const [modalStatus, setModalStatus] = useState(null);
    const modal = showModal ? <Modal modalStatus={modalStatus} cancel={() => setModal(0)} /> : null;

    return (
        <Router>
            <div className="app">
                <Sidebar
                    onClick={() => {setModal(showModal ? 0 : 1); setModalStatus("add")}}
                />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/browse" />
                    </Route>
                    <Route path="/browse" render={() => <Browse />} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
            {modal}
        </Router>
    )
};

export default App;
