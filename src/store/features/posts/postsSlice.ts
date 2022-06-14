import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {ProfilePageType} from './index';

let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), post: 'Hi. I am here!', likesCount: 15},
        {id: v1(), post: 'Hello', likesCount: 10},
        {id: v1(), post: 'It`s my first post', likesCount: 30},
    ]
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        onPostChange: (state, action: PayloadAction<string>) => {
            state.newPostText = action.payload
        },
        addPost: (state) => {
            state.posts.push({id: v1(), post: state.newPostText, likesCount: 0})
            state.newPostText = ''
        },
    },
});

export const {onPostChange, addPost} = postsSlice.actions;