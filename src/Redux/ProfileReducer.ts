import {ActionsType, PostType, ProfilePageType} from './State';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {

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
