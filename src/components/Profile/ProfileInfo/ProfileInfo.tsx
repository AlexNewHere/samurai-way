import React, {ReactElement} from 'react';
import a from './ProfileInfo.module.css'
import avatar from '../../../logo/avatar.jpg';
import {useAppSelector} from 'store/hooks';

export const ProfileInfo = (): ReactElement => {

    const photos = useAppSelector(state => state.profilePage.profile.photos);
    const fullName = useAppSelector(state => state.profilePage.profile.fullName);
    const aboutMe = useAppSelector(state => state.profilePage.profile.aboutMe);

    return (
        <div className={a.content}>
            <img src={(photos !==undefined && photos.large!==null) ? photos.large : avatar} alt="userAvatar"/>
            <div>
                <div>{fullName}</div>
                <div>{aboutMe}</div>
            </div>
        </div>
    )
}