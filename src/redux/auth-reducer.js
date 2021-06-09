import {authAPI, profileAPI} from "../api/api";
import {getUserProfile} from "./profile-reducer";

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
                ...action.payload 
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id: id, email: email, login: login, isAuth: isAuth}})
// export const getAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id: id, email: email, login: login}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {

            if (response.resultCode == 0) {
                let { email, id, login} = response.data
                dispatch(setAuthUserData(id, email, login, true))



            }
        });
    }
}


export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(getAuthUserData())
            }
        });
}



export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}
export default AuthReducer;