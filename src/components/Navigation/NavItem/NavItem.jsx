import React from 'react';
import { NavLink } from "react-router-dom";

import './NavItem.scss';

/*
    Строчка меню в сайдбаре
*/

const NavItem = ({to, icon, name}) => (
    <li className="nav__item">
        <NavLink to={to} activeClassName="active"><i className={icon} aria-hidden="true"></i>{name}</NavLink>
    </li>
);

export default NavItem;
