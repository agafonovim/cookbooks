import React from 'react';
import './NavItem.scss';

import { NavLink } from "react-router-dom";

const NavItem = ({to, icon, name}) => (
    <li className="nav__item">
        <NavLink to={to} activeClassName="active"><i className={icon} aria-hidden="true"></i>{name}</NavLink>
    </li>
);

export default NavItem;
