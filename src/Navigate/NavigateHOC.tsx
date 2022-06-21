import {Outlet, Navigate} from 'react-router-dom';
import {useAppSelector} from 'store/hooks';
import React from 'react';

export const WithAuthRedirect = () => {
    const isAuth = useAppSelector(state => state.authPage.isAuth)
    return (
        isAuth ?
            <Outlet/> :
            <Navigate replace to="/login"/>
    )
}