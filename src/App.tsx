import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import {Header} from 'components/Header';
import {Navbar} from 'components/Navbar';
import {Profile} from 'components/Profile';
import {Footer} from 'components/Footer';
import {Users} from 'components/Users';
import {Dialogs} from 'components/Dialog';
import {AuthLogin} from 'components/Header';
import {WithAuthRedirect} from 'Navigate';


export const App = () => {

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/" element={<Navigate replace to="/login"/>}/>
                    <Route path="/login"
                           element={<AuthLogin/>}
                    />
                    <Route path="/users"
                           element={<Users/>}
                    />
                    <Route element={<WithAuthRedirect/>}>
                        <Route path="/dialogs/*"
                               element={<Dialogs/>}
                        />
                        <Route path="/content/:userId"
                               element={<Profile/>}
                        />
                        <Route path="/content"
                               element={<Profile/>}
                        />
                    </Route>

                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


