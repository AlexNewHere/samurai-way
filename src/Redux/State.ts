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
    posts: Array<PostType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Alex'},
            {id: '2', name: 'Oleg'},
            {id: '3', name: 'Ivan'},
            {id: '4', name: 'Diana'},
            {id: '5', name: 'Ksy'}
        ],

        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Hoho'},
            {id: '4', message: 'Yo'}
        ]
    },
    profilePage: {
        posts: [
            {id: '1', post: 'Hi. I am here!', likesCount: 15},
            {id: '2', post: 'Hello', likesCount: 10},
            {id: '3', post: 'It`s my first post', likesCount: 30},
        ]
    }
}

export default state;