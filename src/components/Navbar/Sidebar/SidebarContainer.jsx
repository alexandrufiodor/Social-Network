import s from "./Sidebar.module.css";
import React from "react";
import {Sidebar} from "./Sidebar";
import StoreContext from "../../../StoreContext";

export const SidebarContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();
                return <Sidebar friends={state.sideBar.friends}/>
            }}
        </StoreContext.Consumer>
    )
}
