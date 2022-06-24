import React from 'react';
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

export const App = () => {

    return (
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
    );
}


