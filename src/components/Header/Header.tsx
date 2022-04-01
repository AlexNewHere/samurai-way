import React from 'react';
import h from './Header.module.css';

export const Header = () =>{
    return (
    <header className={h.header}>
        <img src={'../logo/logo.png'} alt={'logo'}/>
    </header>
    )
}