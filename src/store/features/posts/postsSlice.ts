import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {FormPostType, ProfilePageType} from './index';

let initialState: ProfilePageType = {
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
       addPost: (state, action: PayloadAction<FormPostType>) => {
            state.posts.push({id: v1(), post: action.payload.text, likesCount: 0})
        },
    },
});

export const {addPost} = postsSlice.actions;