import React from 'react';
import s from './Navbar.module.css'


export const Navbar = () =>{
    return (
        <div className={s.sidebar}>
            <div className={s.item}>
                <a href='/dialogs'>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}