import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}><img src={props.avatar} alt=""/>{props.name}</NavLink>
    </div>
}
