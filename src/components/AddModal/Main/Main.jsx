import React from 'react';
import { Tabs, Panel } from '@bumaga/tabs';
import Navigation from "./Navigation/Navigation";

import './Main.scss';

/* Импорт табов с полями ввода */
import General from "../Tabs/General";
import Genre from "../Tabs/Genre";
import Info from "../Tabs/Info";
import Poster from "../Tabs/Poster";

/*
    Главная часть в модальном окне добавления книги
*/

const Main = () => (
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
);

export default Main;
