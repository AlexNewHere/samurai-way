import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Messages';
import a from '../Profile/Myposts/Myposts.module.css';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addPostMessage, onPostChangeMessages} from '../../store/features/dialogs/dialogsSlice';


export const Dialogs = () => {
    const {dialogs, messages, newMessageText}=useAppSelector(state=>state.dialogs);
    const dispatch=useAppDispatch();

    const dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id}/>)

    const messagesElements = messages.map(m =>
        <Message message={m.message} key={m.id}/>)

    const addPostClick = () => {
       dispatch(addPostMessage())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onPostChangeMessages(e.currentTarget.value))
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
                          value={newMessageText}
                          onChange={onPostChangeHandler}/>
                <div>
                    <button onClick={addPostClick}>Submit</button>
                </div>
            </div>

        </div>
    )
}

