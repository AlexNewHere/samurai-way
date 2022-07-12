import React from 'react';
import s from './../Dialogs.module.css'

type PropsType = {
    message: string
}
export const Message = ({message}: PropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}


