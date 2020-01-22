import React from 'react';
import { useTabState } from '@bumaga/tabs';

import './NavItem.scss';

/*
    Строчка меню модального окна добавления книги
*/

const NavItem = ({icon, name}) => {
    
    const { isActive, onClick } = useTabState(); // Хук переключателя табов
    const cn = (...args) => args.filter(Boolean).join(' '); // Для нормального отображения активного пункта меню

    return (
        <li className="modal-nav__item">
            <button type="button" className={cn(isActive && 'active')} onClick={onClick}><i className={icon} aria-hidden="true"></i>{name}</button>
        </li>
    );
};

export default NavItem;
