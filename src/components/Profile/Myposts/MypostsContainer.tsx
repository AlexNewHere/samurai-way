import React from 'react';
import {addPostActionCreator, newPostTextActionCreator, PostType} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./Myposts";
import {connect} from "react-redux";
import {ActionsType, RootReducerType} from "../../../Redux/redux-store";


export type MapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
}
export type MapDispatchToPropsType = {
    onPostChange: (post: string) => void,
    addPost: () => void
}
let mapStoreToProps = (state: RootReducerType): MapStateToPropsType=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onPostChange: (post: string)=> {
            dispatch(newPostTextActionCreator(post))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReducerType>(mapStoreToProps, mapDispatchToProps)(MyPosts)