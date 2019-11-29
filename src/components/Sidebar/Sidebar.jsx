import React from 'react';
import './Sidebar.scss';
import Navigation from "../Navigation/Navigation";
import AddButton from "../AddButton/AddButton";

const Sidebar = props => (
    <aside className="sidebar">
        <AddButton onClick={props.onClick} />
        <Navigation />
    </aside>
);

export default Sidebar;
