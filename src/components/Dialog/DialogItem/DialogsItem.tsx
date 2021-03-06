import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? s.active : s.link;

type PropsType = {
    name: string
}

export const DialogItem: React.FC<PropsType> = ({name}) => {
    let path: string = '/dialogs/' + name
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={linkActive}>{name}</NavLink>
        </div>
    )
}

