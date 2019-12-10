import React from 'react';
import { Tabs, Panel } from '@bumaga/tabs';
import { Field } from "formik";

import './Main.scss';
import Navigation from "./Navigation/Navigation";

const Main = () => {

    return (
        <div className="main">
            <Tabs>
                <Navigation />
                <div className="modal-content">
                    <Panel>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="text"
                            name="title"
                            placeholder="Enter title"
                        />
                    </Panel>
                </div>
            </Tabs>
        </div>
    )
};

export default Main;
