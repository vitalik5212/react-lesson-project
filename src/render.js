import ReactDOM from "react-dom";
import App from "./Components/App";
import {addPost, changeNewPostText} from "./redux/state";
import React from "react";
import './index.css';


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
        changeNewPostText={changeNewPostText}
        />,
        document.getElementById('root')
    );
}