import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {toggleIsFetching} from '../../../store/features/users/usersSlice';
import axios from 'axios';
import {setAuthUserData} from '../../../store/features/authLogin/authSlice';

export const AuthLogin = () => {

    const {login, isAuth} = useAppSelector((state) => state.authPage);
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(toggleIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode===0) {
                    dispatch(setAuthUserData(response.data.data))
                }
            })
    }, [isAuth])


    console.log(isAuth)
    return (
        <div>
Hello {login}
        </div>
    );
};

