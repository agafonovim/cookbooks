import React from 'react';
import { Tabs, Panel } from '@bumaga/tabs';
// import { Field } from "formik";

import './Main.scss';
import Navigation from "./Navigation/Navigation";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";

const Main = () => {

    return (
        <div className="main">
            <Tabs>
                <Navigation />
                <div className="modal-content">
                    <Panel>
                        <Input title="Title" type="text" required />
                        <Input title="Author" type="text" required />
                        <Input title="Publisher" type="text" required />
                        <div className="group">
                            <Input title="Paperback" type="text" />
                            <Input title="ISBN" type="text" required />
                        </div>
                        <Input title="Summary" type="text" />
                    </Panel>
                    <Panel>
                        <Input title="Genre" type="text" />
                    </Panel>
                    <Panel>
                        <Input title="Poster" type="file"/>
                    </Panel>
                    <Panel>
                        <Textarea title="Information"/>
                    </Panel>
                </div>
            </Tabs>
        </div>
    )
};

export default Main;
