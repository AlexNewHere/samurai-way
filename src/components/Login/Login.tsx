import React, {Fragment} from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useAppSelector} from 'store/hooks';
import {FormInputs, loginUserThunk} from 'store/features';

export const Login = () => {
    const dispatch = useDispatch();
    const {isAuth} = useAppSelector(store => store.login);

    const {register, handleSubmit, formState: {isValid}} = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data);
        dispatch(loginUserThunk(data));
    };
    return (
        <Fragment>
            {isAuth ? <Navigate replace to="/profile"/> :
                <>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label> Email:
                            <input {...register('email',
                                {required: true}
                            )}
                                   placeholder={'email'}/>
                        </label>
                        <label> Password:
                            <input {...register('password',
                                {required: true}
                            )}
                                   type="password"
                                   placeholder={'password'}/>
                        </label>
                        <label>
                            <input type="checkbox" {...register('rememberMe')}/>
                            Remember Me
                        </label>
                        <input type="submit" name={'Sign In'}/>
                    </form>
                </>}
        </Fragment>
    );
}
