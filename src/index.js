import state, {addPost, changeNewPostText, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./Components/App";
import React from "react";
import './index.css';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             changeNewPostText={changeNewPostText}
        />,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);
