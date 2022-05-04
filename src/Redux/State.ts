import {v1} from 'uuid';
import {addPostActionCreator, newPostTextActionCreator, profileReducer} from './ProfileReducer';
import {addMessageActionCreator, dialogsReducer, newMessageActionCreator} from './DialogsReducer';

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
    newMessageText: string
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
export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof newMessageActionCreator>

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
            ],
            newMessageText: ''
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

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._onChange()
    }
}
export default store;