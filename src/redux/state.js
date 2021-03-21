// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log('State changed')
}

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
        ],
        newPostText: 'it-kamasutra.com'
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
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"}
        ],
        newMessageText: 'Hello'
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

state.window = state

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}