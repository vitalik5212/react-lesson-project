import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./Components/App";
import React from "react";
import './index.css';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
