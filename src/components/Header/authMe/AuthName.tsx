import {useAppDispatch, useAppSelector} from 'store/hooks';
import {logOutUserThunk} from 'store/features';
import React from 'react';

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