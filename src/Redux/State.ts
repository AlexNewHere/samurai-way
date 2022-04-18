import {renderTree} from '../renderTree';
import {v1} from 'uuid';


export type PostType = {
    post: string
    id: string
    likesCount: number
}

export type DialogType = {
    name: string
    id: string
}

export type MessageType = {
    message: string
    id: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Oleg'},
            {id: v1(), name: 'Ivan'},
            {id: v1(), name: 'Diana'},
            {id: v1(), name: 'Ksy'}
        ],

        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Hoho'},
            {id: v1(), message: 'Yo'}
        ]
    },
    profilePage: {
        newPostText: '',
        posts: [
            {id: v1(), post: 'Hi. I am here!', likesCount: 15},
            {id: v1(), post: 'Hello', likesCount: 10},
            {id: v1(), post: 'It`s my first post', likesCount: 30},
        ]
    }
}

export const addPost =(postText: string) => {
    let newPost: PostType = {
        id: v1(),
        post: postText,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    renderTree(state)
    state.profilePage.newPostText = ''
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}


export default state;