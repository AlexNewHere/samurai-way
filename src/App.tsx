import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import {Users} from './components/Users/Users';
import {Dialogs} from './components/Dialog/Dialogs';
import {AuthLogin} from './components/Header/authLogin/AuthLogin';


export const App = () => {

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/dialogs/*"
                           element={<Dialogs/>}
                    />
                    <Route path="/content/:userId"
                           element={<Profile/>}
                    />
                    <Route path="/content"
                           element={<Profile/>}
                    />
                    <Route path="/users"
                           element={<Users/>}
                    />
                    <Route path="/login"
                           element={<AuthLogin/>}
                    />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


