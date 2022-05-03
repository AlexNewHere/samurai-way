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

export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

type AddActionType = {
    type: 'ADD-POST'

}
type NewPostTextType = {
    type: 'NEW-POST-TEXT'
    newText: string
}

export type ActionsType = AddActionType | NewPostTextType


const store: storeType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _onChange() {
    },
    subscribe(observer: () => void) {
        store._onChange = observer;
    },


    dispatch(action){
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: v1(),
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._onChange()
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    }
}

export default store;