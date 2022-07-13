import React, {ReactElement} from 'react';
import s from './Header.module.css';
import logo from './logo/logo.png'
import {NavLink} from 'react-router-dom';
import {useAppSelector} from 'store/hooks';
import {AuthName} from 'components/Header';

const linkActive = ({isActive}: { isActive: boolean }): string => isActive ? `${s.loginBlock} ${s.activeBlock}` : s.loginBlock;

export const Header = (): ReactElement => {

    const isAuth = useAppSelector((state) => state.login.isAuth);

    return (
        <header className={s.header}>
            <NavLink to="/#"><img className={s.img_logo} src={logo}
                                  alt={'logo'}/></NavLink>
            {isAuth ?
                <AuthName/> :
                <NavLink className={linkActive} to="/login">Login</NavLink>}
        </header>
    )
}