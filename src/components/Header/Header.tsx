import React from 'react';
import h from './Header.module.css';
import logo from './logo/logo.png'

export const Header = () =>{
    return (
    <header className={h.header}>
        <img src={logo} alt={'logo'}/>
    </header>
    )
}