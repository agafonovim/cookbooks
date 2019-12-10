import React from 'react';
import './Navigation.scss';
import NavItem from "./NavItem/NavItem";

const Navigation = () => (
    <nav className="nav">
        <ul className="nav__list">
            <NavItem name="Now Reading" icon="fa fa-book" to="/now-reading" />
            <NavItem name="Browse" icon="fa fa-globe" to="/browse" />
            <NavItem name="Buy Books" icon="fa fa-shopping-cart" to="/buy" />
            <NavItem name="Favourite Books" icon="fa fa-star" to="/favourite" />
            <NavItem name="Wishlist" icon="fa fa-th-list" to="/wishlist" />
        </ul>
    </nav>
);

export default Navigation;
