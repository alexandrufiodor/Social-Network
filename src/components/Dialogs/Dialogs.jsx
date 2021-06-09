import React from 'react';
import s from './Dialogs.module.css' ;
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d, index) => {
        return <DialogItem avatar={d.avatar} name={d.name} id={d.id} key={index}/>
    })

    let messagesElements = props.dialogsPage.messages.map((m, index) => {
        return <Message message={m.message} key={index}/>
    })

    const addNewMessage = (values) => {
        console.log(values.newMessageBody)
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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newMessageBody'}
                       component={'textarea'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;