import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";




const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Nicolas"},
        {id: 3, name: "Valery"},
        {id: 4, name: "Danny"}
    ]


    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"}
    ]


    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = messages.map(m => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;