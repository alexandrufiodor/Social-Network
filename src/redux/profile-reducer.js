import {authAPI, profileAPI} from "../api/api";
import {setAuthUserData} from "./auth-reducer";
import {UNFOLLOW} from "./users-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
// const UPDATE_STATUS = 'UPDATE-STATUS'

let initialState = {
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
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: body,
                    avatar: 'https://c0.klipartz.com/pngpicture/534/918/gratis-png-naruto-uzumaki-sasuke-uchiha-rock-lee-kakashi-hatake-gaara-discord-avatar.png',
                    likesCount: 0
                }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status})
// export const updateStatus = (status) => ({type: UPDATE_STATUS, status: status})

export const getUserProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getUserStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(data => {
            dispatch(setUserStatus(data))
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(data))
            }
        });
    }
}