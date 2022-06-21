import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';

import {WithAuthRedirect} from 'Navigate';
import {AuthLogin, Dialogs, Footer, Header, Navbar, Profile, Users} from 'components';

export const App = () => {

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>
            <div className="grid_wrapper_content">
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login"/>}/>
                    <Route path="/login" element={<AuthLogin/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route element={<WithAuthRedirect/>}>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/content/:userId" element={<Profile/>}/>
                        <Route path="/content" element={<Profile/>}/>
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


