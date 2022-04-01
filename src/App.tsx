import React from 'react';
import './App.css';
// import logo.png from './logo'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';

const App = () => {
    return (
        <div className="grid">
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;

