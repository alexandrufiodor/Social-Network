import {getAuthUserData} from "./auth-reducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'


const initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case  INITIALIZED_SUCCESS : {

            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}

export default AppReducer;