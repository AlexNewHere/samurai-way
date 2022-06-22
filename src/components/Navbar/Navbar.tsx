import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? s.active : s.link;

export const Navbar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/profile" className={linkActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={linkActive}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/#" className={linkActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/#" className={linkActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={linkActive}>Users</NavLink>
            </div>
        </div>
    )
}