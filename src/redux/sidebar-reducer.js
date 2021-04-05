import React from 'react';

let initialState = {
    friends: [
        {
            id: 1,
            name: "Alex",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU'
        },
        {
            id: 2,
            name: "Nicolas",
            avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png'
        },
        {
            id: 3,
            name: "Valery",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU'
        }
    ]
}

const sidebarReducer = (state = initialState) => {

    return state;

}


export default sidebarReducer;