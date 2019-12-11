import React from 'react';
import { useTabState } from '@bumaga/tabs';
import './NavItem.scss';

const NavItem = ({icon, name}) => {
    const { isActive, onClick } = useTabState();
    const cn = (...args) => args.filter(Boolean).join(' ');

    return (
        <li className="modal-nav__item">
            <button type="button" className={cn(isActive && 'active')} onClick={onClick}><i className={icon} aria-hidden="true"></i>{name}</button>
        </li>
    )
};

export default NavItem;
