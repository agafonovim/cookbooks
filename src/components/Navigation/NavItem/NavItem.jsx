import React from 'react';
import './NavItem.scss';

import { NavLink } from "react-router-dom";

const NavItem = props => (
    <li className="nav__item">
        <NavLink to={props.to} activeClassName="active"><i className={props.icon} aria-hidden="true"></i>{props.name}</NavLink>
    </li>
);

export default NavItem;
