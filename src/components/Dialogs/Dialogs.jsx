import React from 'react';
import s from './Dialogs.module.css' ;
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";


const Dialogs = (props) => {




    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = props.messages.map(m => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;