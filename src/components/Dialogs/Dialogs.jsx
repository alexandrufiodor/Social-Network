import React from 'react';
import s from './Dialogs.module.css' ;
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, index) => {
        return <DialogItem avatar = {d.avatar} name={d.name} id={d.id} key={index}/>
    })

    let messagesElements = props.state.messages.map((m, index) => {
        return <Message message={m.message} key={index}/>
    })

    let newMessage = React.createRef();
    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: ''})


    }
    const onMessageChange = () => {

        let text = newMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
        props.dispatch(action)
        
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText}/>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;