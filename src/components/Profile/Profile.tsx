import React from 'react';
import a from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./Myposts/MypostsContainer";
import {AppPropsType} from "../../App";



export const Profile = (props: AppPropsType) => {

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <MyPostsContainer

                store={props.store}

            />
        </div>
    )
}