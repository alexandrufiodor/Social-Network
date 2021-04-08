
import React from "react";
import {Sidebar} from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;