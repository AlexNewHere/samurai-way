import React from 'react';
import s from './Header.module.css';
import logo from './logo/logo.png'
import {NavLink} from 'react-router-dom';

export const Header = () =>{
    return (
    <header className={s.header}>
        <NavLink to='/#'><img src={logo} alt={'logo'}/></NavLink>
    </header>
    )
}