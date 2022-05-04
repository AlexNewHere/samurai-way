import React from 'react';
import s from './../Dialogs.module.css'
// import {MessageType} from '../../../Redux/State';

type PropsType = {
    message: string
}
export const Message = (props: PropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


