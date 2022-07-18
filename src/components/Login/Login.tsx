import React, {Fragment} from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppSelector} from 'store/hooks';
import {FormInputs, loginUserThunk, SetErrorType} from 'store/features';

export const Login = () => {

    const isAuth = useAppSelector(store => store.login.isAuth);
    const dispatch = useDispatch();

    const {register, handleSubmit, setError, clearErrors, formState: {errors}} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
        console.log(data);
        let dataError: SetErrorType = {data, setError}
        dispatch(loginUserThunk(dataError));
    };

    const changeHandle = () => {
        clearErrors("error")
    }
    return (
        <Fragment>
            {isAuth ? <Navigate replace to="/profile"/> :
                <>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div> Email:
                            <input {...register('email',
                                {required: true}
                            )}
                                onChange={changeHandle}
                                   placeholder={'email'}/>
                        </div>
                        <div> Password:
                            <input {...register('password',
                                {required: true}
                            )}
                                   onChange={changeHandle}
                                   type="password"
                                   placeholder={'password'}/>
                        </div>
                        <div>
                            <input type="checkbox" {...register('rememberMe')}/>
                            Remember Me
                        </div>
                        <input type="submit" name={'Sign In'}/>
                        <div {...register("error")} />
                        {errors.error && <p>{errors.error?.message}</p>}
                    </form>
                </>}
        </Fragment>
    );
}
