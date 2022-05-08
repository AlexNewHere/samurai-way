import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Messages';
import a from '../Profile/Myposts/Myposts.module.css';
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";



export const Dialogs: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
debugger
    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id}/>)

    const messagesElements = props.messages.map(m =>
        <Message message={m.message} key={m.id}/>)

    const addPost = () => {
       props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
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

