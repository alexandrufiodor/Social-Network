const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    ],
    newMessageText: 'Hello'
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText})

export default dialogsReducer;