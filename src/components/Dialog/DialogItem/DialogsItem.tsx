import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
// import {DialogType} from '../../../Redux/State';

const linkActive = ({isActive}: { isActive: boolean }) => isActive ? s.active : s.link;

type PropsType = {
    name: string
}

export const DialogItem = (props: PropsType) => {
    let path: string = '/dialogs/' + props.name
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={linkActive}>{props.name}</NavLink>
        </div>
    )
}

