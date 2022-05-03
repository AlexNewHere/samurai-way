import React from 'react';
import a from './Profile.module.css'
import {MyPosts} from './Myposts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../Redux/State';

type PostType = {
    posts: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsType) => void

}

export const Profile = (props: PostType) => {
    return (
        <div className={a.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}