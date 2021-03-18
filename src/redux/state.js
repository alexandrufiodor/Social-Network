import {rerenderEntireTree} from "../render";

export let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: "Hi, how are you?",
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU',
                likesCount: 12
            },
            {
                id: 2,
                message: "It's my first post",
                avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                likesCount: 21
            },
            {
                id: 3,
                message: "It's my first post1",
                avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                likesCount: 21
            },
            {
                id: 4,
                message: "It's my first post2",
                avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                likesCount: 21
            }
        ]
    },
    dialogsPage: {
        dialogs: [
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
            },
            {
                id: 4,
                name: "Danny",
                avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png'
            }
        ],
        messages: [
            {id: 1, className: 'question', message: "Hi"},
            {id: 2, className: 'question', message: "How is your it-kamasutra?"},
            {id: 3, className: 'answer', message: "Yo"}
        ]
    },
    sideBar: {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)

    rerenderEntireTree(state)

}