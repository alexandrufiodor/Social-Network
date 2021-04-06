import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                    store.dispatch(updateNewMessageTextActionCreator(''))
                }
                const onMessageChange = (text) => {
                    // let text = newMessage.current.value;
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return <Dialogs onMessageChange={onMessageChange}
                                addMessage={addMessage}
                                dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;