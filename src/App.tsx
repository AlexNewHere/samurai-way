import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialog/Dialogs';
import {Route, Routes} from 'react-router-dom';


export const App = () => {
    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/content' element={<Profile/>}/>
                </Routes>
            </div>
                    <Footer/>
        </div>
    );
}


