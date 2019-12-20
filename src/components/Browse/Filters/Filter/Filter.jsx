import React from 'react';
import { useTabState } from '@bumaga/tabs';
import './Filter.scss';

const Filter = ({title}) => {
    const { isActive, onClick } = useTabState();
    const cn = (...args) => args.filter(Boolean).join(' ');

    return (
        <button className={`filter ${cn(isActive && "active")}`} onClick={onClick}>{title}</button>
    )
};

export default Filter;
