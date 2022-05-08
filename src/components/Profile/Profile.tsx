import React from 'react';
import a from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./Myposts/MypostsContainer";


export const Profile = () => {

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}