import React from 'react';
import s from './Dialogs.module.css' ;
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => {
        return <DialogItem avatar = {d.avatar} name={d.name} id={d.id}/>
    })

    let messagesElements = props.state.messages.map(m => {
        return <Message message={m.message}/>
    })

    let newMessage = React.createRef();
    const addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;