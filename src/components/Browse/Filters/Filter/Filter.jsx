import React from 'react';
import { useTabState } from '@bumaga/tabs';

import './Filter.scss';

/*
    Фильтр в Browse
*/

const Filter = ({title}) => {

    const { isActive, onClick } = useTabState(); // Хук табов
    const cn = (...args) => args.filter(Boolean).join(' '); // Для корректной работы в классах

    return (
        <button className={`filter ${cn(isActive && "active")}`} onClick={onClick}>{title}</button>
    );
};

export default Filter;
