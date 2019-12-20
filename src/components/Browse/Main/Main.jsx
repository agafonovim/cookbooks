import React from 'react';
import './Main.scss';
import Filters from "../Filters/Filters";
import { Tabs, usePanelState } from '@bumaga/tabs';

const Panel = ({ component }) => {
    const isActive = usePanelState();
    return isActive ? component : null;
};

const Main = props => {
    return (
        <Tabs>
            <Filters />
            <Panel component={}/>
            <Panel />
            <Panel />
            <Panel />
            <Panel />
        </Tabs>
    )
};

export default Main;
