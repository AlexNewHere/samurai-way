import React from 'react';
import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {Provider} from "react-redux";

let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree();


store.subscribe(() => renderTree());