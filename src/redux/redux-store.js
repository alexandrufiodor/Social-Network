import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
})

export let store = createStore(reducers);