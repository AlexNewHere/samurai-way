import React from 'react';
import s from './Header.module.css';
import logo from './logo/logo.png'
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {logOutUserThunk} from 'store/features/userLogin';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? `${s.loginBlock} ${s.activeBlock}` : s.loginBlock;

export const AuthName = () => {

    const login = useAppSelector((state) => state.login.login);
    const dispatch = useAppDispatch()

    const logOutHandle = () => {
        dispatch(logOutUserThunk())
    }

    return (
        <div>
            <div>{login}</div>
            <button onClick={logOutHandle}>Log out</button>
        </div>
    )
}

export const Header = () => {

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