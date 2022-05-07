import React from 'react';
import './index.css';
import store, {storeType} from './Redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

let renderTree = (store: storeType) => {
    ReactDOM.render(
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>,

        document.getElementById('root')
    );
}

renderTree(store);


store.subscribe(()=>renderTree(store));