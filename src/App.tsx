import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialog/Dialogs';

const App = () => {
    return (
        <div className="grid_wrapper">
            <Header/>
            <Navbar/>
            {/*<Content/>*/}
            <div className='grid_wrapper_content'>
                <Dialogs/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

