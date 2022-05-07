import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./Myposts";
import {storeType} from "../../../Redux/redux-store";


type PropsType = {
    store: storeType
    }

export const MyPostsContainer = (props: PropsType) => {

    const state = props.store.getState().profilePage

    const addPost = () => {
        state.newPostText && props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (post: string) => {
        props.store.dispatch(newPostTextActionCreator(post))
    }

    return (
       <MyPosts
           posts={state.posts}
           newPostText={state.newPostText}
           onPostChange={onPostChange}
           addPost={addPost}
       />
    )
}