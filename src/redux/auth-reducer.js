import {authAPI, profileAPI} from "../api/api";

export const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id: id, email: email, login: login}})

export const authMe = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode == 0) {
                let { email, id, login} = response.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
}

export default AuthReducer;