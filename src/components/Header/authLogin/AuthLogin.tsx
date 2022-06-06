import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {toggleIsFetching} from '../../../store/features/users/usersSlice';
import {setAuthUserData} from '../../../store/features/authLogin/authSlice';
import {authApi} from '../../../api/getApi';

export const AuthLogin = () => {

    const {login, isAuth} = useAppSelector((state) => state.authPage);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        authApi()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data))
                }
            })
    }, [isAuth])

    return (
        <div>
            Hello {login}
        </div>
    );
};

