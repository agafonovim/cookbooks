import React from 'react';
import { useTabState } from '@bumaga/tabs';

import './NavItem.scss';

/*
    Навигация в модальном окне просмотра книги
*/

const NavItem = ({icon, name}) => {

    // Хук состояния таба
    const { isActive, onClick } = useTabState();
    // Для номального вывода имени класса
    const cn = (...args) => args.filter(Boolean).join(' ');

    return (
        <li className="modal-nav__item">
            <button type="button" className={cn(isActive && 'active')} onClick={onClick}><i className={icon} aria-hidden="true"></i>{name}</button>
        </li>
    )
};

export default NavItem;
