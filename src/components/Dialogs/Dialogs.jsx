import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialog + ' ' + s.active}>Alex</div>
                <div className={s.dialog}>Nicoleta</div>
                <div className={s.dialog}>Valery</div>
                <div className={s.dialog}>Dan</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;