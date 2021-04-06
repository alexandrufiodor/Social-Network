import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
        props.store.dispatch(updateNewMessageTextActionCreator(''))
    }
    const onMessageChange = (text) => {
        // let text = newMessage.current.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <Dialogs onMessageChange={onMessageChange}
                 addMessage={addMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText} />
    )
}

export default DialogsContainer;