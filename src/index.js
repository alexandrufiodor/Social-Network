import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Nicolas"},
    {id: 3, name: "Valery"},
    {id: 4, name: "Danny"}
]


let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"}
]

let posts = [
    {id: 1, message: "Hi, how are you?", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU', likesCount: 12},
    {id: 2, message: "It's my first post", avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png', likesCount: 21},
    {id: 3, message: "It's my first post1", avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png', likesCount: 21},
    {id: 4, message: "It's my first post2", avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png', likesCount: 21}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
