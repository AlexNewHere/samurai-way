import React from 'react';
import a from './Profile.module.css'
import {MyPosts} from './Myposts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/State';

type PostType = {
    posts: ProfilePageType
    newPostText: string
    addPost: () => void
    changeNewText: (newText: string) => void
}

export const Profile = (props: PostType) => {
    return (
        <div className={a.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                changeNewText={props.changeNewText}
            />
        </div>
    )
}