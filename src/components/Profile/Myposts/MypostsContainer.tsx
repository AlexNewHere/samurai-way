import {addPostActionCreator, newPostTextActionCreator, PostType} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./Myposts";
import {connect} from "react-redux";
import {RootReducerType} from "../../../Redux/redux-store";
import {Dispatch} from 'redux'

export type MapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
}
export type MapDispatchToPropsType = {
    onPostChange: (post: string) => void,
    addPost: () => void
}

export type UsersDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStoreToProps = (state: RootReducerType): MapStateToPropsType=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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