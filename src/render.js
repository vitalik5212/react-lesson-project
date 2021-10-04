import ReactDOM from "react-dom";
import App from "./Components/App";
import {addPost} from "./redux/state";
import React from "react";
import './index.css';


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}