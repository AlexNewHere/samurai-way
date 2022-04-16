import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Messages';
import {DialogsPageType} from '../../Redux/State';

type PageStateType = {
    dialogsPage: DialogsPageType
    }

export const Dialogs = (props: PageStateType ) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>

                {dialogsElements}

            </div>
            <div>

                {messagesElements}

            </div>
        </div>
    )
}

