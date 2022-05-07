import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import {storeType} from './Redux/State';
import {DialogsContainer} from "./components/Dialog/DialogsContainer";

export type AppPropsType = {
    store: storeType
}

export const App = (props: AppPropsType) => {



    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer store={props.store}/>}
                    />
                    <Route path="/content"
                           element={<Profile store={props.store}/>}
                    />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


