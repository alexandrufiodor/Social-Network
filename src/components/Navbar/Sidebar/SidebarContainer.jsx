import s from "./Sidebar.module.css";
import React from "react";
import {Sidebar} from "./Sidebar";

export const SidebarContainer = (props) => {
    let state = props.store.getState();
    return <Sidebar friends={state.sideBar.friends}/>
}
