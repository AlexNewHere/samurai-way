import {ActionsType} from './redux-store';
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

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const newMessageActionCreator = (text: string) => ({type: NEW_MESSAGE_TEXT, newText: text} as const)

let initialstate: DialogsPageType = {
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

export const dialogsReducer = (state = initialstate, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            break;
    }
    return state;
};



