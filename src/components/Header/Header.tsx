import React from 'react';
import s from './Header.module.css';
import logo from './logo/logo.png'
import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? `${s.loginBlock} ${s.activeBlock}` : s.loginBlock;

export const Header = () =>{

    const {login,isAuth} = useAppSelector((state) => state.authPage);

    return (
    <header className={s.header}>
        <NavLink  to='/#'><img className={s.img_logo} src={logo} alt={'logo'}/></NavLink>
       {isAuth? `${login}`:  <NavLink className={linkActive}  to='/login'>Login</NavLink>}

    </header>
    )
}