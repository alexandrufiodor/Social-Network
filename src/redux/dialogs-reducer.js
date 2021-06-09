const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
    ]
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessageText}]
            }
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer;