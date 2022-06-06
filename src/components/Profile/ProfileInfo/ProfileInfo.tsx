import React from 'react';
import a from './ProfileInfo.module.css'
import {ProfileUserType} from '../../../store/features/userFrofile/profileSlice';
import avatar from '../../../logo/avatar.jpg';

export const ProfileInfo = (props: ProfileUserType) => {


    return (
        <div className={a.content}>

            <img src={props.photos.large !== null ? props.photos.large : avatar} alt="userAvatar"/>

            <div>
                <div>{props.fullName}</div>
                <div>{props.aboutMe}</div>
                <div>{props.aboutMe}</div>
                <div>{props.contacts.instagram}</div>
            </div>
        </div>
    )
}