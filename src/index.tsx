import React from 'react';
import './index.css';
import state, {subscribe} from './Redux/State';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

let renderTree = () => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree();


subscribe(renderTree);