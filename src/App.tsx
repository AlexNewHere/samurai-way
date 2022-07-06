import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';

import {WithAuthRedirect} from 'Navigate';
import {
    AuthLogin,
    Dialogs,
    Footer,
    Header,
    Navbar,
    Profile,
    UserProfile,
    Users
} from 'components';
import {Login} from 'components/Login';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {Preloader} from 'components/Users';
import {authMeUserThunk} from 'store/features';

export const App = () => {

    const isFetching = useAppSelector(state => state.login.isFetching)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMeUserThunk())
    }, [dispatch])

    return (
        <>
            {isFetching ? <Preloader/> :
                <div className="grid_wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="grid_wrapper_content">
                        <Routes>
                            <Route path="/" element={<Navigate replace to="/login"/>}/>
                            <Route path="/login1" element={<AuthLogin/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route element={<WithAuthRedirect/>}>
                                <Route path="/users" element={<Users/>}/>
                                <Route path="/dialogs/*" element={<Dialogs/>}/>
                                <Route path="/profile/:userId" element={<UserProfile/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                            </Route>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            }
        </>
    );
}


