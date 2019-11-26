import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import './App.scss';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import NotFound from "../NotFound/NotFound";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Switch>
                    <Route path="/browse" component={Content} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;
