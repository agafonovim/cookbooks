import React from 'react';
import { Tabs, Panel } from '@bumaga/tabs';

import './Main.scss';
import Navigation from "./Navigation/Navigation";

/* Импорт табов */
import General from "../Tabs/General";
import Genre from "../Tabs/Genre";
import Info from "../Tabs/Info";
import Poster from "../Tabs/Poster";

const Main = props => {
    return (
        <div className="main">
            <Tabs>
                <Navigation />
                <div className="modal-content">
                    <Panel>
                        <General />
                    </Panel>
                    <Panel>
                        <Genre />
                    </Panel>
                    <Panel>
                        <Poster />
                    </Panel>
                    <Panel>
                        <Info />
                    </Panel>
                </div>
            </Tabs>
        </div>
    )
};

export default Main;
