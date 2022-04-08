import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const linkActive = ({isActive}: {isActive: boolean})=>isActive? s.active: s.link;

type PropsType = {
    name: string
    id: string
}

const DialogItem = (props: PropsType) => {
    let path: string = '/dialogs/'+props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={linkActive}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>

              <DialogItem name='Alex' id='1' />
              <DialogItem name='Oleg' id='2' />
              <DialogItem name='Ivan' id='3' />
              <DialogItem name='Diana' id='4' />
              <DialogItem name='Ksy' id='5' />

            </div>
            <div>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Messages'/>
            </div>
        </div>
    )
}

