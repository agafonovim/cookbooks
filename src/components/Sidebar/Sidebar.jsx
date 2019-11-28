import React from 'react';
import './Sidebar.scss';
import Navigation from "../Navigation/Navigation";
import AddButton from "../AddButton/AddButton";

const Sidebar = () => (
    <aside className="sidebar">
        <AddButton/>
        <Navigation />
    </aside>
);

export default Sidebar;
