import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialog/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {storeType} from './Redux/State';

type AppPropsType = {
    store: storeType
}

export const App = (props: AppPropsType) => {

    const state = props.store.getState();

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                               dialogsPage={state.dialogsPage}
                               newMessageText={state.dialogsPage.newMessageText}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}
                    />
                    <Route path="/content"
                           element={<Profile
                               posts={state.profilePage}
                               newPostText={state.profilePage.newPostText}
                               dispatch={props.store.dispatch.bind(props.store)}/>}
                    />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


