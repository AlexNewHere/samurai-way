import React, {FC} from 'react';
import a from './ProfileInfo.module.css'
import avatar from '../../../logo/avatar.jpg';
import {ProfileUserType} from '../../../store/features/userFrofile';

export const ProfileInfo: FC<ProfileUserType> = ({
                                                     aboutMe,
                                                     contacts,
                                                     fullName,
                                                     photos
                                                 }) => {
    return (
        <div className={a.content}>

            <img src={photos.large !== null ? photos.large : avatar} alt="userAvatar"/>

            <div>
                <div>{fullName}</div>
                <div>{aboutMe}</div>
                <div>{aboutMe}</div>
                <div>{contacts.instagram}</div>
            </div>
        </div>
    )
}