import {ActionsType} from './redux-store';
import {v1} from 'uuid';

export type PostType = {
    post: string
    id: string
    likesCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialstate: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), post: 'Hi. I am here!', likesCount: 15},
        {id: v1(), post: 'Hello', likesCount: 10},
        {id: v1(), post: 'It`s my first post', likesCount: 30},
    ]
}

export const profileReducer = (state = initialstate, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            break;
        case 'NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }
    return state;
};
export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const newPostTextActionCreator = (text: string) => ({type: NEW_POST_TEXT, newText: text} as const)
