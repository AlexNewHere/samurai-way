import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Messages';
import {
    ActionsType, addMessageActionCreator,
    DialogsPageType,
    newMessageActionCreator } from '../../Redux/State';
import a from '../Profile/Myposts/Myposts.module.css';

type PageStateType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PageStateType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id}/>)

    const messagesElements = props.dialogsPage.messages.map(m =>
        <Message message={m.message} key={m.id}/>)

    const addPost = () => {
        props.newMessageText && props.dispatch(addMessageActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>

                {dialogsElements}

            </div>
            <div>
                {messagesElements}

                <textarea className={a.textarea}
                          placeholder={'Enter your post'}
                          value={props.newMessageText}
                          onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>Submit</button>
                </div>
            </div>

        </div>
    )
}

