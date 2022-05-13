import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialog/DialogsContainer";
import {UsersContainer} from './components/Users/UsersContainer';


export const App = () => {

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer/>}
                    />
                    <Route path="/content"
                           element={<Profile/>}
                    />
                    <Route path="/users"
                           element={<UsersContainer/>}
                    />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


