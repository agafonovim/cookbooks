import React from 'react';
import Navigation from "../Navigation/Navigation";
import AddButton from "../AddButton/AddButton";

import './Sidebar.scss';

/*
    Сайдбар
*/

const Sidebar = ({showAddModal}) => (
    <aside className="sidebar">
        <AddButton onClick={showAddModal} />
        <Navigation />
    </aside>
);

export default Sidebar;
