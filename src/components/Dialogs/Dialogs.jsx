import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Nicolas" id="2"/>
                <DialogItem name="Valery" id="3"/>
                <DialogItem name="Danny" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;