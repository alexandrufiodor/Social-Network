import React from 'react';
import s from './Dialogs.module.css' ;
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d, index) => {
        return <DialogItem avatar={d.avatar} name={d.name} id={d.id} key={index}/>
    })

    let messagesElements = props.dialogsPage.messages.map((m, index) => {
        return <Message message={m.message} key={index}/>
    })

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;