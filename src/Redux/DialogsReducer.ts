import {v1} from 'uuid';

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

let initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Oleg'},
    ],

    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case 'NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
    }
    return state;
};


type ActionsType = ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof newMessageActionCreator>

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const newMessageActionCreator = (text: string) => ({type: 'NEW-MESSAGE-TEXT', newText: text} as const)


