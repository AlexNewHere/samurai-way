import React from 'react';
import a from './ProfileInfo.module.css'
import avatar from '../../../logo/avatar.jpg';
import {ProfileStatuses} from 'components/Profile';
import {useAppSelector} from 'store/hooks';

export const ProfileInfo = () => {

    const photos = useAppSelector(state => state.profilePage.photos);
    const fullName = useAppSelector(state => state.profilePage.fullName);
    const aboutMe = useAppSelector(state => state.profilePage.aboutMe);

    return (
        <div className={a.content}>

            <img src={photos.large !== null ? photos.large : avatar} alt="userAvatar"/>
            <ProfileStatuses />
            <div>
                <div>{fullName}</div>
                <div>{aboutMe}</div>
            </div>
        </div>
    )
}