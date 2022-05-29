import React from 'react';
import a from './ProfileInfo.module.css'
import {ProfileUserType} from '../../../store/features/userFrofile/profileSlice';
import avatar from '../../../logo/avatar.jpg';

export const ProfileInfo = (props: ProfileUserType) => {



    return (
        <div className={a.content}>
            <div>
                <img className={a.img}
                src="https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm"
                alt="Обои"/>
            </div>
            <img src={props.photos.large !== null ? props.photos.large : avatar} alt=""/>

            <div>
                <div>{props.fullName}</div>
                <div>{props.aboutMe}</div>
                <div>{props.aboutMe}</div>
                <div>{props.contacts.instagram}</div>
            </div>
        </div>
    )
}