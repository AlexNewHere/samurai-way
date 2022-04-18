import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialog/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {addPost, changeNewText, RootStateType} from './Redux/State';

type AppPropsType = {
    state: RootStateType
}

export const App = (props: AppPropsType) => {

    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>

            <div className="grid_wrapper_content">

                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs
                        dialogsPage={props.state.dialogsPage}

                    />}/>
                    <Route path="/content" element={<Profile
                        posts={props.state.profilePage}
                        newPostText={props.state.profilePage.newPostText}
                        addPost={addPost}
                        changeNewText={changeNewText}
                    />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}


