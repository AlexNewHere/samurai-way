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

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const newPostTextActionCreator = (text: string) => ({type: NEW_POST_TEXT, newText: text} as const)
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const newMessageActionCreator = (text: string) => ({type: NEW_MESSAGE_TEXT, newText: text} as const)

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
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._onChange()
            this._state.dialogsPage.newMessageText = ''
        } else if (action.type === 'NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._onChange()
        }
    }
}

export default store;