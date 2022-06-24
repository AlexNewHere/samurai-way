import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {authMeUserThunk} from 'store/features';

export const AuthLogin = () => {

    const {login, isAuth} = useAppSelector((state) => state.login);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMeUserThunk())
    }, [isAuth, dispatch])

    return (
        <div>
            Hello {login}
        </div>
    );
};

