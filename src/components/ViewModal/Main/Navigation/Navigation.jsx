import React from 'react';
import './Navigation.scss';
import NavItem from "./NavItem/NavItem";

const Navigation = props => (
    <div className="modal-nav">
        <ul className="modal-nav__list">
            <NavItem {...props} name="General" icon="fa fa-align-center" />
            <NavItem {...props} name="Genre" icon="fa fa-tags" />
            <NavItem {...props} name="Poster" icon="fa fa-file-image-o" />
            <NavItem {...props} name="Info" icon="fa fa-info-circle" />
        </ul>
    </div>
);

export default Navigation;
