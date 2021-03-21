
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, state, subscriber, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText = {updateNewPostText} updateNewMessageText = {updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscriber(rerenderEntireTree) ;

reportWebVitals();
